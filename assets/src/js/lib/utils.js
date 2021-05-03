export const wrap = (element, wrapper = document.createElement("div")) => {
    if (element.nextSibling) {
        element.parentNode.insertBefore(wrapper, element.nextSibling);
    } else {
        element.parentNode.appendChild(wrapper);
    }

    return wrapper.appendChild(element);
};

export const slideUp = (element, duration) => {
    element.style.boxSizing = "border-box";
    element.style.transitionProperty = "height, margin, padding";
    element.style.transitionDuration = duration + "ms";
    element.style.height = element.offsetHeight + "px";
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.style.overflow = "hidden";

    setTimeout(() => {
        element.style.height = 0;
    }, 1);

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

    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");

    setTimeout(() => {
        element.style.height = height + "px";
    }, 1);

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

    const fade = () => {
        let opacity = parseFloat(element.style.opacity);

        if ((opacity += 0.1) <= 1) {
            element.style.opacity = opacity;
            window.requestAnimationFrame(fade);
        }
    };

    window.requestAnimationFrame(fade);
};

export const fadeOut = (element, display) => {
    element.style.opacity = 1;
    element.style.display = display || "block";

    const fade = () => {
        let opacity = parseFloat(element.style.opacity);

        if ((opacity -= 0.1) < 0) {
            element.style.display = "none";
        } else {
            element.style.opacity = opacity;
            window.requestAnimationFrame(fade);
        }
    };

    window.requestAnimationFrame(fade);
};

export const offset = (element) => {
    if (!element.getClientRects().length) {
        return { top: 0, left: 0 };
    }

    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    const rect = element.getBoundingClientRect();
    const win = element.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset,
    };
};

export const visible = (element) => {
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};
