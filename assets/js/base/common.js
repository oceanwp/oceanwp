// Fade out.
function fadeOut(el) {
	el.style.opacity = 1;
	(function fade() {
		if ((el.style.opacity -= .1) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
}

// Fade in.
function fadeIn(el, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";
	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .1) >= 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
}

// // Find.
// function find(el, target) {

// 	// Final found elements.
// 	var found_elements = [];

// 	// Find all the outer matched elements.
// 	var outers = document.querySelectorAll(el);

// 	for(var i=0; i<outers.length; i++) {
// 		var elements_in_outer = outers[i].querySelectorAll(target);

// 		// document.querySelectorAll() returns an "array-like" collection of elements
// 		// convert this "array-like" collection to an array
// 		elements_in_outer = Array.prototype.slice.call(elements_in_outer);

// 		found_elements = found_elements.concat(elements_in_outer);
// 	}
// }