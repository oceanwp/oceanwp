Element.prototype.oceanParents = function (selector) {
    var elements = [];
    var elem = this;
    var ishaveselector = selector !== undefined;

    while ((elem = elem.parentElement) !== null) {
        if (elem.nodeType !== Node.ELEMENT_NODE) {
            continue;
        }

        if (!ishaveselector || elem.matches(selector)) {
            elements.push(elem);
        }
    }

    return elements;
};
