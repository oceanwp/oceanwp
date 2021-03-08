/**
* Vanilla JS fork of fitVids.js by Dave Rupert
* https://github.com/davatron5000/FitVids.js
*
* (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
*/
var FitVids = (function () {

	'use strict';

	/**
	* Create the Constructor object
	*/
	var Constructor = function (selectors) {

		// Default video players
		var defaults = 'iframe[src*="player.vimeo.com"], iframe[src*="youtube.com"], iframe[src*="youtube-nocookie.com"], iframe[src*="kickstarter.com"][src*="video.html"], object, embed';

		// Public APIs object
		var publicAPIs = {};

		// Placeholder for video elements
		var vids;

		/**
		* Inject video resizing styles
		* https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
		*/
		var addStyles = function () {

			// Don't run if there are already styles on the page
			if (document.querySelector('#fitvids-styles')) return;

			// Get the head element
			var head = document.head || document.getElementsByTagName('head')[0];

			// Create styles
			var css = '.fitvids{width:100%;position:relative;padding:0;}.fitvids iframe,.fitvids object,.fitvids embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
			var div = document.createElement('div');
			div.innerHTML = '<p>x</p><style id="fitvids-styles">' + css + '</style>';

			// Inject styles into the DOM
			head.appendChild(div.childNodes[1]);

		};

		/**
		* Wrap videos in wrapper element
		*/
		var wrapVids = function () {

			vids.forEach(function (vid) {

				// Don't run on existing fitvids wrapped content
				if ((vid.tagName.toLowerCase() === 'embed' && vid.closest('object')) || vid.closest('.fitvids')) return;

				// Get properties
				var height = parseFloat(vid.height);
				var width = parseFloat(vid.width);

				// Don't run if there's no valid height or width properties
				if (!height || !width || isNaN(height) || isNaN(width)) return;

				// Create wrapper
				var wrapper = document.createElement('div');
				wrapper.className = 'fitvids';
				wrapper.style.paddingTop = ((height / width) * 100)  + '%';

				// Wrap the video and inject back into the DOM
				vid.parentNode.insertBefore(wrapper, vid);
				wrapper.appendChild(vid);

			});
		};

		/**
			* Initialize plugin
			*/
		var init = function () {

			// Get the video elements
			// If custom selectors were provided, use them
			// Otherwise, use defaults
			vids = Array.from(document.querySelectorAll(selectors || defaults));

			// If there are no matching videos, bail
			if (!vids.length) return;

			// Add wrapper styles
			addStyles();

			// Wrap videos
			wrapVids();

		};

		/**
		* Re-render videos if DOM is updated
		*/
		publicAPIs.render = function () {
			init();
		};

		// Initialize the instance and return the Public APIs
		init();
		return publicAPIs;

	};

	// Return the Constructor
	return Constructor;

})();