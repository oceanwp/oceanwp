export const wrap = (element, wrapper = document.createElement("div")) => {
    if (element.nextSibling) {
        element.parentNode.insertBefore(wrapper, element.nextSibling);
    } else {
        element.parentNode.appendChild(wrapper);
    }

    return wrapper.appendChild(element);
};

export const slideUp = (element, duration = 300) => {
    element.style.boxSizing = "border-box";
    element.style.transitionProperty = "height, margin, padding";
    element.style.transitionDuration = `${duration}ms`;
    element.style.height = `${element.offsetHeight}px`;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.style.overflow = "hidden";

    setTimeout(() => {
        element.style.height = 0;
    }, 10);

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

export const slideDown = (element, duration = 300) => {
    element.style.removeProperty("display");

    let display = window.getComputedStyle(element).display;

    if (display === "none") {
        display = "block";
    }

    element.style.display = display;

    let height = element.offsetHeight;
    let paddingTop = window.getComputedStyle(element).paddingTop;
    let paddingBottom = window.getComputedStyle(element).paddingBottom;
    let marginTop = window.getComputedStyle(element).marginTop;
    let marginBottom = window.getComputedStyle(element).marginBottom;

    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.style.overflow = "hidden";

    element.style.boxSizing = "border-box";
    element.style.transitionProperty = "height";
    element.style.transitionDuration = `${duration}ms`;

    setTimeout(() => {
        element.style.height = `${height}px`;
        element.style.transitionProperty = "padding";
        element.style.transitionDuration = `${duration / 1.2}ms`;
        element.style.paddingTop = paddingTop;
        element.style.paddingBottom = paddingBottom;
        element.style.marginTop = marginTop;
        element.style.marginBottom = marginBottom;
    }, 10);

    window.setTimeout(() => {
        element.style.removeProperty("height");
        element.style.removeProperty("overflow");
        element.style.removeProperty("transition-duration");
        element.style.removeProperty("transition-property");
        element.style.removeProperty("padding-top");
        element.style.removeProperty("padding-bottom");
        element.style.removeProperty("margin-top");
        element.style.removeProperty("margin-bottom");
    }, duration);
};

export const slideToggle = (element, duration) =>
    window.getComputedStyle(element).display === "none" ? slideDown(element, duration) : slideUp(element, duration);

export const fadeIn = (element, display, callback = null) => {
    element.style.opacity = 0;
    element.style.display = display || "block";

    const fade = () => {
        let opacity = parseFloat(element.style.opacity);
        opacity = Math.round(opacity * 100 + 10) / 100;

        if (opacity <= 1) {
            element.style.opacity = opacity;

            if (opacity === 1 && callback) {
                callback();
            }

            window.requestAnimationFrame(fade);
        }
    };

    window.requestAnimationFrame(fade);
};

export const fadeOut = (element, display, callback = null) => {
    element.style.opacity = 1;
    element.style.display = display || "block";

    const fade = () => {
        let opacity = parseFloat(element.style.opacity);
        opacity = Math.round(opacity * 100 - 10) / 100;

        if (opacity < 0) {
            element.style.display = "none";
        } else {
            element.style.opacity = opacity;

            if (opacity === 0 && callback) {
                callback();
            }

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
    if (!element) {
        return false;
    }

    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};

export const getSiblings = (e) => {
    // for collecting siblings
    const siblings = [];

    // if no parent, return no sibling
    if (!e.parentNode) {
        return siblings;
    }

    // first child of the parent node
    let sibling = e.parentNode.firstChild;

    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }

        sibling = sibling.nextSibling;
    }

    return siblings;
};

// Returns true if it is a DOM element
export const isElement = (o) => {
    return typeof HTMLElement === "object"
        ? o instanceof HTMLElement // DOM2
        : o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
};
