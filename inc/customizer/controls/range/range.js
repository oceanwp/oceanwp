wp.customize.controlConstructor["oceanwp-range"] = wp.customize.Control.extend({
    ready: function () {
        "use strict";

        var control = this;

        // Update the text value
        jQuery("input[type=range]")
            .off()
            .on("input", function () {
                var range = jQuery(this);
                var value = range.val();

                range.siblings("input.oceanwp-range-input").attr("value", value);
            });

        // Change the text value
        jQuery("input.oceanwp-range-input")
            .off()
            .on("input", function () {
                var rangeInput = jQuery(this);
                var value = rangeInput.val();

                rangeInput.siblings("input[type=range]").val(value).trigger("input");
            });

        jQuery(".oceanwp-reset-slider")
            .off()
            .on("click", function () {
                var range = jQuery(this).siblings("input[type=range]");
                var resetValue = range.data("reset_value");

                range.val(resetValue).trigger("input");
            });

        // Change the value
        this.container.on("input", "input[type=range]", function () {
            control.setting.set(jQuery(this).val());
        });
    },
});
