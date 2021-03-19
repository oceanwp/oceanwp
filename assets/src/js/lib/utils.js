export const wrap = (element, wrapper = document.createElement("div")) => {
    if (element.nextSibling) {
        element.parentNode.insertBefore(wrapper, element.nextSibling);
    } else {
        element.parentNode.appendChild(wrapper);
    }

    return wrapper.appendChild(element);
};

export const slideUp = (element, duration) => {
    element.style.transitionProperty = "height, margin, padding";
    element.style.transitionDuration = duration + "ms";
    element.style.boxSizing = "border-box";
    element.style.height = element.offsetHeight + "px";
    setTimeout(() => {
        element.style.height = 0;
    }, 10);
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.style.overflow = "hidden";

    window.setTimeout(() => {
        element.style.display = "none";
        element.style.removeProperty("height");
        element.style.removeProperty("padding-top");
        element.style.removeProperty("padding-bottom");
        element.style.removeProperty("margin-top");
        element.style.removeProperty("margin-bottom");
        element.style.removeProperty("overflow");
        element.style.removeProperty("transition-duration");
        element.style.removeProperty("transition-property");
    }, duration);
};

export const slideDown = (element, duration) => {
    element.style.removeProperty("display");

    let display = window.getComputedStyle(element).display;

    if (display === "none") {
        display = "block";
    }
    element.style.display = display;

    let height = element.offsetHeight;
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.style.overflow = "hidden";

    element.style.boxSizing = "border-box";
    element.style.transitionProperty = "height, margin, padding";
    element.style.transitionDuration = duration + "ms";
    setTimeout(() => {
        element.style.height = height + "px";
    }, 10);
    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");

    window.setTimeout(() => {
        element.style.removeProperty("height");
        element.style.removeProperty("overflow");
        element.style.removeProperty("transition-duration");
        element.style.removeProperty("transition-property");
    }, duration);
};

export const slideToggle = (element, duration) =>
    window.getComputedStyle(element).display === "none"
        ? slideDown(element, duration)
        : slideUp(element, duration);

export const fadeIn = (element, display) => {
    element.style.opacity = 0;
    element.style.display = display || "block";

    (function fade() {
        let val = parseFloat(element.style.opacity);
        if (!((val += 0.1) > 1)) {
            element.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

export const fadeOut = (element) => {
    element.style.opacity = 1;

    (function fade() {
        if ((element.style.opacity -= 0.1) < 0) {
            element.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};
