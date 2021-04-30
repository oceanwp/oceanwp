(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _start = new WeakMap();

var WooWidgets = function WooWidgets() {
  _classCallCheck(this, WooWidgets);

  _start.set(this, {
    writable: true,
    value: function value() {
      document.querySelectorAll(".widget_layered_nav span.count, .widget_product_categories span.count").forEach(function (item) {
        var count = item.innerHTML;
        item.innerHTML = count.substring(1, count.length - 1);
      });
    }
  });

  _classPrivateFieldGet(this, _start).call(this);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL3dwLXBsdWdpbnMvd29vY29tbWVyY2UvZGV2L3dvb1dpZGdldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUNBTSxVLEdBQ0Ysc0JBQWM7QUFBQTs7QUFBQTtBQUFBO0FBQUEsV0FJTCxpQkFBTTtBQUNYLE1BQUEsUUFBUSxDQUNILGdCQURMLENBQ3NCLHVFQUR0QixFQUVLLE9BRkwsQ0FFYSxVQUFDLElBQUQsRUFBVTtBQUNmLFlBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFuQjtBQUNBLFFBQUEsSUFBSSxDQUFDLFNBQUwsR0FBaUIsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsS0FBSyxDQUFDLE1BQU4sR0FBZSxDQUFsQyxDQUFqQjtBQUNILE9BTEw7QUFNSDtBQVhhOztBQUNWO0FBQ0gsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIFdvb1dpZGdldHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLndpZGdldF9sYXllcmVkX25hdiBzcGFuLmNvdW50LCAud2lkZ2V0X3Byb2R1Y3RfY2F0ZWdvcmllcyBzcGFuLmNvdW50XCIpXG4gICAgICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gaXRlbS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBjb3VudC5zdWJzdHJpbmcoMSwgY291bnQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xufVxuIl19
