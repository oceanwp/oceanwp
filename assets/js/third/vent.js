/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(function() {
      return (root.Vent = factory());
    });
  }
  else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  }
  else {
    // Global Variables
    root.Vent = factory();
  }
}(this, function() {
  // The next ID we'll use for scoped delegation
  var lastID = 0;

  /*
    Matches selectors that are scoped, such as:
      > selector
      :scope > selector
  */
  var scopedSelectorRegex = /^\s*(>|:scope\s*>)/;

  /**
    Check if the first array contains every element in the second array

    @ignore
  */
  function contains(set, subSet) {
    for (var i = 0; i < subSet.length; i++) {
      if (set.indexOf(subSet[i]) === -1) {
        return false;
      }
    }
    return true;
  }

  /**
    Check if the provided selector is scoped (has context)

    @ignore
  */
  function isScoped(selector) {
    return selector && scopedSelectorRegex.test(selector);
  }

  /**
    Replaces the stopPropagation() method of an event object

    @ignore
  */
  function ventStopPropagation() {
    this._ventPropagationStopped = true;
    Event.prototype.stopPropagation.call(this);
  }

  /**
    Replaces the stopImmediatePropagation() method of an event object

    @ignore
  */
  function ventStopImmediatePropagation() {
    this._ventImmediatePropagationStopped = true;
    Event.prototype.stopImmediatePropagation.call(this);
  }

  /**
    Get the right method to match selectors on

    @ignore
  */
  var matchesSelector = (function() {
    var proto = Element.prototype;
    var matchesSelector = (
      proto.matches ||
      proto.matchesSelector ||
      proto.webkitMatchesSelector ||
      proto.mozMatchesSelector ||
      proto.msMatchesSelector ||
      proto.oMatchesSelector
    );

    if (!matchesSelector) {
      throw new Error('Vent: Browser does not support matchesSelector');
    }

    return matchesSelector;
  }());

  /**
    @class Vent
    @classdesc DOM event delegation

    @param {HTMLElement|String} elementOrSelector
      The element or selector indicating the element to use as the delegation root.
  */
  function Vent(elementOrSelector) {
    if (this === root) {
      throw new Error('Vent must be invoked with the new keyword');
    }

    var root;
    if (typeof elementOrSelector === 'string') {
      root = document.querySelector(elementOrSelector);
    }
    else {
      root = elementOrSelector;
    }

    // Store a reference to the root element
    // This is the node at which we'll listen to events
    this.root = root;

    // Map of event names to array of events
    // Don't inherit from Object so we don't collide with properties on its prototype
    this._listenersByType = Object.create(null);

    /*
      A list of all of the listener objects tracked by this instance
      Each item takes the following form:
      {
        eventName: String,
        handler: Function,
        namespaces: Array<string>,
        selector: String | null,
        useCapture: Boolean,
        isScoped: Boolean
      }
    */
    this._allListeners = [];

    // Ensure listeners always execute in the scope of this instance
    this._executeCaptureListeners = this._executeCaptureListeners.bind(this);
    this._executeBubbleListeners = this._executeBubbleListeners.bind(this);

    // All Vent instances get an ID
    this._id = this._id || lastID++;
  }

  /**
    Check if the listener should fire on the given rooted target

    @ignore
  */
  Vent.prototype._listenerMatchesRootTarget = function(listener, target) {
    return (
      // When no selector is provided
      listener.selector === null &&
      (
        // Execute if we've landed on the root
        target === this.root
      )
    );
  };

  /**
    Check if the listener should fire on the given delegated target

    @ignore
  */
  Vent.prototype._listenerMatchesDelegateTarget = function(listener, target) {
    return (
      // document does not support matches()
      target !== document &&
      // Don't bother with delegation on the root element
      target !== this.root &&
      // Check if the event is delegated
      listener.selector !== null &&
      // Only execute  if the selector matches
      (
        // Check if the selector has context
        listener.isScoped ?
        // Run the match using the root element's ID
        matchesSelector.call(target, '[__vent-id__="'+this._id+'"] '+listener.selector)
        // Run the match without context
        : matchesSelector.call(target, listener.selector)
      )
    );
  };

  /**
    Check if the listener matches the given event phase

    @ignore
  */
  Vent.prototype._listenerMatchesEventPhase = function(listener, useCapture) {
    // Check if the event is the in right phase
    return (listener.useCapture === useCapture);
  };

  /**
    This function is responsible for checking if listeners should be executed for the current event

    @ignore
  */
  Vent.prototype._executeListenersAtElement = function(target, listeners, event, useCapture) {
    var listener;
    var returnValue;

    // Execute each listener that meets the criteria
    executeListeners: for (var listenerIndex = 0; listenerIndex < listeners.length; listenerIndex++) {
      listener = listeners[listenerIndex];

      if (
        // Do not process events on disabled items #1
        !(event.type === 'click' && target.disabled === true)
        &&
        // Check if the target element matches for this listener
        (
          this._listenerMatchesRootTarget(listener, target) ||
          this._listenerMatchesDelegateTarget(listener, target)
        ) &&
        this._listenerMatchesEventPhase(listener, useCapture)
      ) {
        // Store the target that matches the event currently
        event.matchedTarget = target;

        // Call handlers in the scope of the delegate target, passing the event along
        returnValue = listener.handler.call(target, event);

        // Prevent default and stopPropagation if the handler returned false
        if (returnValue === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        if (event._ventImmediatePropagationStopped) {
          // Do not process any more event handlers and stop bubbling
          break executeListeners;
        }
      } // end if
    } // end executeListeners
  };

  /**
    Handles all events added with Vent

    @private
    @memberof Vent
  */
  Vent.prototype._executeCaptureListeners = function(event) {
    var listeners = this._listenersByType[event.type];

    if (!listeners) {
      throw new Error('Vent: _executeListeners called in response to '+event.type+', but we are not listening to it');
    }

    if (listeners.length) {
      // Get a copy of the listeners
      // Without this, removing an event inside of a callback will cause errors
      listeners = listeners.slice();

      // Decorate the event object so we know when stopPropagation is called
      this._decorateEvent(event);

      // Get the event's path through the DOM
      var eventPath = this._getPath(event);

      // Simulate the capture phase by trickling down the target list
      trickleDown: for (var eventPathIndex = eventPath.length - 1; eventPathIndex >= 0; eventPathIndex--) {
        if (!listeners.length) {
          // Stop trickling down if there are no more listeners to execute
          break trickleDown;
        }

        var currentTargetElement = eventPath[eventPathIndex];
        this._executeListenersAtElement(currentTargetElement, listeners, event, true);

        // Stop if a handler told us to stop trickling down the DOM
        if (
          event._ventImmediatePropagationStopped ||
          event._ventPropagationStopped
        ) {
          // Stop simulating trickle down
          break trickleDown;
        }
      }
    }

    // Clean up after Vent
    // We'll be re-decorating the event object in the bubble phase, if the event gets there
    this._undecorateEvent(event);
  };

  /**
    Handles all events added with Vent

    @private
    @memberof Vent
  */
  Vent.prototype._executeBubbleListeners = function(event) {
    var listeners = this._listenersByType[event.type];

    if (!listeners) {
      throw new Error('Vent: _executeListeners called in response to '+event.type+', but we are not listening to it');
    }

    if (listeners.length) {
      // Get a copy of the listeners
      // Without this, removing an event inside of a callback will cause errors
      listeners = listeners.slice();

      // Decorate the event object so we know when stopPropagation is called
      this._decorateEvent(event);

      /*
        Figure out if the bubble phase should be simulated

        Both focus and blur do not bubble:
          https://developer.mozilla.org/en-US/docs/Web/Events/focus
          https://developer.mozilla.org/en-US/docs/Web/Events/blur

        However, focusin, focusout, change, and other events do.
      */
      var shouldBubble = event.type !== 'focus' && event.type !== 'blur';

      // Re-use the event path as calculated during the capture phase
      var eventPath = this._getPath(event);

      // If listeners remain and propagation was not stopped, simulate the bubble phase by bubbling up the target list
      bubbleUp: for (var eventPathIndex = 0; eventPathIndex < eventPath.length; eventPathIndex++) {
        if (!listeners.length) {
          // Stop bubbling up if there are no more listeners to execute
          break bubbleUp;
        }

        var currentTargetElement = eventPath[eventPathIndex];
        this._executeListenersAtElement(currentTargetElement, listeners, event, false);

        // Stop simulating the bubble phase if a handler told us to
        if (
          event._ventImmediatePropagationStopped ||
          event._ventPropagationStopped
        ) {
          break bubbleUp;
        }

        // If the event shouldn't bubble, only simulate it on the target
        if (!shouldBubble) {
          break bubbleUp;
        }
      }
    }

    // Clean up after Vent
    this._undecorateEvent(event);

    // Clear the path
    event['_ventPath'+this._id] = null;
  };

  /**
    Override stopPropagation/stopImmediatePropagation so we know if we should stop processing events
  */
  Vent.prototype._decorateEvent = function(event) {
    event.stopPropagation = ventStopPropagation;
    event.stopImmediatePropagation = ventStopImmediatePropagation;
  };

  /**
    Restore the normal stopPropagation methods
  */
  Vent.prototype._undecorateEvent = function(event) {
    event.stopPropagation = Event.prototype.stopPropagation;
    event.stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
  };

  /**
    Restore the normal stopPropagation methods
  */
  Vent.prototype._getPath = function(event) {
    if (event['_ventPath'+this._id]) {
      return event['_ventPath'+this._id];
    }

    // If the event was fired on a text node, delegation should assume the target is its parent
    var target = event.target;
    if (target.nodeType === Node.TEXT_NODE) {
      target = target.parentNode;
    }

    // Build an array of the DOM tree between the root and the element that dispatched the event
    // The HTML specification states that, if the tree is modified during dispatch, the event should bubble as it was before
    // Building this list before we dispatch allows us to simulate that behavior
    var pathEl = target;
    var eventPath = [];
    buildPath: while (pathEl && pathEl !== this.root) {
      eventPath.push(pathEl);
      pathEl = pathEl.parentNode;
    }
    eventPath.push(this.root);

    event['_ventPath'+this._id] = eventPath;

    return eventPath;
  };

  /**
    Add an event listener.
    @memberof Vent

    @param {String} eventName
      The event name to listen for, including optional namespace(s).
    @param {String} [selector]
      The selector to use for event delegation.
    @param {Function} handler
      The function that will be called when the event is fired.
    @param {Boolean} [useCapture]
      Whether or not to listen during the capturing or bubbling phase.

    @returns {Vent} this, chainable.
  */
  Vent.prototype.on = function(eventName, selector, handler, useCapture) {
    if (typeof selector === 'function') {
      useCapture = handler;
      handler = selector;
      selector = null;
    }

    if (typeof handler !== 'function') {
      throw new Error('Vent: Cannot add listener with non-function handler');
    }

    // Be null if every falsy (undefined or empty string passed)
    if (!selector) {
      selector = null;
    }


    if (typeof useCapture === 'undefined') {
      // Force useCapture for focus and blur events
      if (eventName === 'focus' || eventName === 'blur') {
        // true by default for focus and blur events only
        useCapture = true;
      }
      else {
        // false by default
        // This matches the HTML API
        useCapture = false;
      }
    }

    // Extract namespaces
    var namespaces = null;
    var dotIndex = eventName.indexOf('.');
    if (dotIndex !== -1) {
      namespaces = eventName.slice(dotIndex+1).split('.');
      eventName = eventName.slice(0, dotIndex);
    }

    // Get/create the list for the event type
    var listenerList = this._listenersByType[eventName];
    if (!listenerList) {
      listenerList = this._listenersByType[eventName] = [];

      // Add the actual listener
      this.root.addEventListener(eventName, this._executeCaptureListeners, true);
      this.root.addEventListener(eventName, this._executeBubbleListeners, false);
    }

    // Set the special ID attribute if the selector is scoped
    var listenerIsScoped = isScoped(selector);
    if (listenerIsScoped) {
      // Normalize selectors so they don't use :scope
      selector = selector.replace(scopedSelectorRegex, '>');

      // Store a unique ID and set a special attribute we'll use to scope
      this.root.setAttribute('__vent-id__', this._id);
    }

    // Create an object with the event's information
    var eventObject = {
      eventName: eventName,
      handler: handler,
      namespaces: namespaces,
      selector: selector,
      useCapture: useCapture,
      isScoped: listenerIsScoped
    };

    // Store relative to the current type and with everyone else
    listenerList.push(eventObject);
    this._allListeners.push(eventObject);
  };

  /**
    Remove an event listener.
    @memberof Vent

    @param {String} [eventName]
      The event name to stop listening for, including optional namespace(s).
    @param {String} [selector]
      The selector that was used for event delegation.
    @param {Function} [handler]
      The function that was passed to <code>on()</code>.
    @param {Boolean} [useCapture]
      Only remove listeners with <code>useCapture</code> set to the value passed in.

    @returns {Vent} this, chainable.
  */
  Vent.prototype.off = function(eventName, selector, handler, useCapture) {
    if (typeof selector === 'function') {
      useCapture = handler;
      handler = selector;
      selector = null;
    }

    // Be null if not provided
    if (typeof eventName === 'undefined') {
      eventName = null;
    }

    if (typeof selector === 'undefined') {
      selector = null;
    }

    if (typeof handler === 'undefined') {
      handler = null;
    }

    if (typeof useCapture === 'undefined') {
      useCapture = null;
    }

    // Extract namespaces
    var namespaces = null;
    if (eventName) {
      var dotIndex = eventName.indexOf('.');
      if (dotIndex !== -1) {
        namespaces = eventName.slice(dotIndex+1).split('.');
        eventName = eventName.slice(0, dotIndex);
      }
    }

    // Be null
    if (eventName === '') {
      eventName = null;
    }

    var listener;
    var index;
    var listeners = this._allListeners;
    for (var i = 0; i < listeners.length; i++) {
      listener = listeners[i];

      if (
        (eventName === null || listener.eventName === eventName) &&
        (selector === null || listener.selector === selector) &&
        (handler === null || listener.handler === handler) &&
        (useCapture === null || listener.useCapture === useCapture) &&
        (
          // Remove matching listeners, regardless of namespace
          namespaces === null ||
          // Listener matches all specified namespaces
          (listener.namespaces && contains(listener.namespaces, namespaces))
        )
      ) {
        // Remove the listeners info
        this._allListeners.splice(i, 1);

        // Array length changed, so check the same index on the next iteration
        i--;

        // Get index in listenersByType map
        if (!this._listenersByType[listener.eventName]) {
          throw new Error('Vent: Missing listenersByType for '+listener.eventName);
        }

        // Find the event info in the other lookup list
        index = this._listenersByType[listener.eventName].indexOf(listener);
        if (index !== -1) {
          var mapList = this._listenersByType[listener.eventName];

          // Remove from the map
          mapList.splice(index, 1);

          // Check if we've removed all the listeners for this event type
          if (mapList.length === 0) {
            // Remove the actual listener, if necessary
            this.root.removeEventListener(listener.eventName, this._executeCaptureListeners, true);
            this.root.removeEventListener(listener.eventName, this._executeBubbleListeners, false);

            // Avoid using delete operator for performance
            this._listenersByType[listener.eventName] = null;
          }
        }
        else {
          throw new Error('Vent: Event existed in allEvents, but did not exist in listenersByType');
        }
        // Don't stop now! We want to remove all matching listeners, so continue to loop
      }
    }

    return this;
  };

  if (typeof CustomEvent === 'function') {
    // Use native CustomEvent on platforms that support it
    // Note: defaultPrevented will not be set correctly if CustomEvent is polyfilled

    /**
      Dispatch a custom event at the root element.
      @memberof Vent

      @param {String} eventName
        The name of the event to dispatch.
      @param {Object} [options]
        CustomEvent options.
      @param {Object} [options.bubbles=true]
        Whether the event should bubble.
      @param {Object} [options.cancelable=true]
        Whether the event should be cancelable.
      @param {Object} [options.detail]
        Data to pass to handlers as <code>event.detail</code>
    */
    Vent.prototype.dispatch = function(eventName, options) {
      options = options || {};

      if (typeof options.bubbles === 'undefined') {
        options.bubbles = true;
      }

      if (typeof options.cancelable === 'undefined') {
        options.cancelable = true;
      }

      var event = new CustomEvent(eventName, options);
      this.root.dispatchEvent(event);

      return event;
    };
  }
  else {
    // Use createEvent for old browsers
    Vent.prototype.dispatch = function(eventName, options) {
      options = options || {};

      if (typeof options.bubbles === 'undefined') {
        options.bubbles = true;
      }

      if (typeof options.cancelable === 'undefined') {
        options.cancelable = true;
      }

      var event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventName, options.bubbles, options.cancelable, options.detail);

      // Dispatch the event, checking the return value to see if preventDefault() was called
      var defaultPrevented = !this.root.dispatchEvent(event);

      // Check if the defaultPrevented status was correctly stored back to the event object
      if (defaultPrevented !== event.defaultPrevented) {
        // dispatchEvent() doesn't correctly set event.defaultPrevented in IE 9
        // However, it does return false if preventDefault() was called
        // Unfortunately, the returned event's defaultPrevented property is read-only
        // We need to work around this such that (patchedEvent instanceof Event) === true
        // First, we'll create an object that uses the event as its prototype
        // This gives us an object we can modify that is still technically an instanceof Event
        var patchedEvent = Object.create(event);

        // Next, we set the correct value for defaultPrevented on the new object
        // We cannot simply assign defaultPrevented, it causes a "Invalid Calling Object" error in IE 9
        // For some reason, defineProperty doesn't cause this
        Object.defineProperty(patchedEvent, 'defaultPrevented', { value: defaultPrevented });

        return patchedEvent;
      }

      return event;
    };
  }

  /**
    Destroy this instance, removing all events and references.
    @memberof Vent
  */
  Vent.prototype.destroy = function() {
    if (this.destroyed) {
      // Instance is already destroyed, do nothing
      return;
    }

    // Remove all events
    this.off();

    // Remove all references
    this._listenersByType = null;
    this._allListeners = null;
    this.root = null;
    this.destroyed = true;
  };

  return Vent;
}));
