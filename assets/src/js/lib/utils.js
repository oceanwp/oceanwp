/**
 * @param {HTMLElement} element
 * @param {HTMLElement} [wrapper={HTMLDivElement}]
 * @returns {HTMLElement}
 */
export const wrap = (element, wrapper = document.createElement("div")) => {
    if (element.nextSibling) {
        element.parentNode.insertBefore(wrapper, element.nextSibling);
    } else {
        element.parentNode.appendChild(wrapper);
    }

    return wrapper.appendChild(element);
};
