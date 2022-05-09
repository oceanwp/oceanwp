class SearchBase {
  focus = (form, inputClass) => {
    let formTransitionDuration =
      parseFloat(getComputedStyle(form).transitionDuration.replace("s", "")) *
      1000;

    formTransitionDuration = !!formTransitionDuration
      ? formTransitionDuration
      : 600;

    if (formTransitionDuration) {
      setTimeout(function () {
        form.querySelector(inputClass).focus();
      }, formTransitionDuration);
    }
  };
}

export default SearchBase;
