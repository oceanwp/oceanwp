(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _setupEventListeners = new WeakMap();

var _onReviewLinkClick = new WeakMap();

var WooReviewScroll = function WooReviewScroll() {
  var _this = this;

  _classCallCheck(this, WooReviewScroll);

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      document.querySelectorAll(".woocommerce div.product .woocommerce-review-link").forEach(function (reviewLink) {
        reviewLink.addEventListener("click", _classPrivateFieldGet(_this, _onReviewLinkClick));
      });
    }
  });

  _onReviewLinkClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      document.querySelectorAll(".woocommerce-tabs .description_tab").forEach(function (item) {
        item.classList.remove("active");
      });
      document.querySelectorAll(".woocommerce-tabs .reviews_tab").forEach(function (item) {
        item.classList.add("active");
      });
      document.querySelector(".woocommerce-tabs #tab-description").style.display = "none";
      document.querySelector(".woocommerce-tabs #tab-reviews").style.display = "block";
      DOM.html.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
      DOM.body.scrollTo({
        top: jQuery(_this.hash).offset().top - 120,
        behavior: "smooth"
      });
    }
  });

  _classPrivateFieldGet(this, _setupEventListeners).call(this);
};

var _default = WooReviewScroll;
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL3dwLXBsdWdpbnMvd29vY29tbWVyY2UvZGV2L3dvb1Jldmlld1Njcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBTSxlLEdBQ0YsMkJBQWM7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUEsV0FJUyxpQkFBTTtBQUN6QixNQUFBLFFBQVEsQ0FDSCxnQkFETCxDQUNzQixtREFEdEIsRUFFSyxPQUZMLENBRWEsVUFBQyxVQUFELEVBQWdCO0FBQ3JCLFFBQUEsVUFBVSxDQUFDLGdCQUFYLENBQTRCLE9BQTVCLHdCQUFxQyxLQUFyQztBQUNILE9BSkw7QUFLSDtBQVZhOztBQUFBO0FBQUE7QUFBQSxXQVlPLGVBQUMsS0FBRCxFQUFXO0FBQzVCLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFOO0FBRUEsTUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsb0NBQTFCLEVBQWdFLE9BQWhFLENBQXdFLFVBQUMsSUFBRCxFQUFVO0FBQzlFLFFBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLFFBQXRCO0FBQ0gsT0FGRDtBQUlBLE1BQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLGdDQUExQixFQUE0RCxPQUE1RCxDQUFvRSxVQUFDLElBQUQsRUFBVTtBQUMxRSxRQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBZixDQUFtQixRQUFuQjtBQUNILE9BRkQ7QUFJQSxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9DQUF2QixFQUE2RCxLQUE3RCxDQUFtRSxPQUFuRSxHQUE2RSxNQUE3RTtBQUNBLE1BQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0NBQXZCLEVBQXlELEtBQXpELENBQStELE9BQS9ELEdBQXlFLE9BQXpFO0FBRUEsTUFBQSxHQUFHLENBQUMsSUFBSixDQUFTLFFBQVQsQ0FBa0I7QUFDZCxRQUFBLEdBQUcsRUFBRSxjQURTO0FBRWQsUUFBQSxRQUFRLEVBQUU7QUFGSSxPQUFsQjtBQUtBLE1BQUEsR0FBRyxDQUFDLElBQUosQ0FBUyxRQUFULENBQWtCO0FBQ2QsUUFBQSxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFOLENBQU4sQ0FBa0IsTUFBbEIsR0FBMkIsR0FBM0IsR0FBaUMsR0FEeEI7QUFFZCxRQUFBLFFBQVEsRUFBRTtBQUZJLE9BQWxCO0FBSUg7QUFwQ2E7O0FBQ1Y7QUFDSCxDOztlQXFDVSxlIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgV29vUmV2aWV3U2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29vY29tbWVyY2UgZGl2LnByb2R1Y3QgLndvb2NvbW1lcmNlLXJldmlldy1saW5rXCIpXG4gICAgICAgICAgICAuZm9yRWFjaCgocmV2aWV3TGluaykgPT4ge1xuICAgICAgICAgICAgICAgIHJldmlld0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uUmV2aWV3TGlua0NsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjb25SZXZpZXdMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b29jb21tZXJjZS10YWJzIC5kZXNjcmlwdGlvbl90YWJcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2NvbW1lcmNlLXRhYnMgLnJldmlld3NfdGFiXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZS10YWJzICN0YWItZGVzY3JpcHRpb25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlLXRhYnMgI3RhYi1yZXZpZXdzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgRE9NLmh0bWwuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiBzY3JvbGxQb3NpdGlvbixcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBET00uYm9keS5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IGpRdWVyeSh0aGlzLmhhc2gpLm9mZnNldCgpLnRvcCAtIDEyMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb29SZXZpZXdTY3JvbGw7XG4iXX0=
