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

function slideUp( el, duration ) {

	/* Sliding-up logic */
	el.style.transitionProperty = 'height, margin, padding'; /* [1.1] */
	el.style.transitionDuration = duration + 'ms'; /* [1.2] */
	el.style.boxSizing = 'border-box'; /* [2] */
	el.style.height = el.offsetHeight + 'px'; /* [3] */

	el.style.height = 0; /* [4] */
	el.style.paddingTop = 0; /* [5.1] */
	el.style.paddingBottom = 0; /* [5.2] */
	el.style.marginTop = 0; /* [6.1] */
	el.style.marginBottom = 0; /* [7.2] */
	el.style.overflow = 'hidden'; /* [7] */
	el.style.transition = "all 2s ease-in-out";

	window.setTimeout( () => {
		el.style.display = 'none'; /* [8] */
		el.style.removeProperty('height'); /* [9] */
		el.style.removeProperty('padding-top');  /* [10.1] */
		el.style.removeProperty('padding-bottom');  /* [10.2] */
		el.style.removeProperty('margin-top');  /* [11.1] */
		el.style.removeProperty('margin-bottom');  /* [11.2] */
		el.style.removeProperty('overflow');  /* [12] */
		el.style.removeProperty('transition-duration');  /* [13.1] */
		el.style.removeProperty('transition-property');  /* [13.2] */
	}, duration);

}

function slideDown( el, duration ) {

	/* Sliding-down logic */
	el.style.removeProperty('display'); /* [1] */
	let display = window.getComputedStyle(el).display;
	if (display === 'none') { /* [2] */
		display = 'block';
	}
	el.style.display = display;

	var height = el.offsetHeight; /* [3] */
	el.style.height = 0; /* [4] */
	el.style.paddingTop = 0; /* [5.1] */
	el.style.paddingBottom = 0; /* [5.2] */
	el.style.marginTop = 0; /* [6.1] */
	el.style.marginBottom = 0; /* [6.2] */
	el.style.overflow = 'hidden'; /* [7] */

	el.style.boxSizing = 'border-box'; /* [8] */
	el.style.transitionProperty = "height, margin, padding";  /* [9.1] */
	el.style.transitionDuration = duration + 'ms'; /* [9.2] */
	el.style.height = height + 'px'; /* [10] */
	el.style.removeProperty('padding-top'); /* [11.1] */
	el.style.removeProperty('padding-bottom'); /* [11.2] */
	el.style.removeProperty('margin-top'); /* [12.1] */
	el.style.removeProperty('margin-bottom'); /* [12.2] */

	window.setTimeout( () => {
		el.style.removeProperty('height'); /* [13] */
		el.style.removeProperty('overflow'); /* [14] */
		el.style.removeProperty('transition-duration'); /* [15.1] */
		el.style.removeProperty('transition-property'); /* [15.2] */
	}, duration);

}

function slideToggle( el, duration ) {

	/* Slide-toggle logic */
	if (window.getComputedStyle( el ).display === 'none') {
		slideDown( el, duration);
	} else {
		slideUp( el, duration);
	}
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