class SearchBase {
    focus = (form, inputClass) => {
        const formTransitionDuration =
            parseFloat(getComputedStyle(form).transitionDuration.replace("s", "")) * 1000;

        if (formTransitionDuration) {
            setTimeout(function () {
                form.querySelector(inputClass).focus();
            }, formTransitionDuration);
        }
    };
}

export default SearchBase;
