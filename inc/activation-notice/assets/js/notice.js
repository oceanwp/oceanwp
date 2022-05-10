// Document Ready
jQuery(document).ready(function ($) {

	var owp_notification = {

		isLoading: false,

		init: function () {

			if ($('.owp-ocean-extra-plugin-inner').length) {
				this.render_actions();
				$(document).on('click', '.owp-ocean-extra-plugin-inner .notice-dismiss', this.dismiss_notice);
				$(document).on('click', '.owp-ocean-extra-plugin-inner .notice-actions button', this.main_action);
			}

		},

		render_actions: function () {
			$.ajax({
				type: 'post',
				url: ajaxurl,
				data: {
					action: 'oceanwp_check_notice_actions'
				},
				success: function (response) {
					if (response.data != '') {
						$('.owp-notification-content').append(response.data);
					}
				},
				complete: function () {
				}
			});
		},

		dismiss_notice: function (evt) {

			$(evt.target).closest('.notice-ocean-extra-plugin').remove();

			$.ajax(ajaxurl, {
				type: 'POST',
				data: {
					action: 'oceanwp_dismissed_notice',
				},
			})

		},

		main_action: function (evt) {
			owp_notification.isLoading = true;

			var $el = $(evt.target);
			$el.prop('disabled', 'disabled');

			if ($el.data('action') == 'activate') {
				$(evt.target).text(owp_notification_i18n.activating);
			} else if ($el.data('action') == 'install_activate') {
				$(evt.target).text(owp_notification_i18n.installing_activating);
			}

			$(evt.target).append('<i className="dashicons dashicons-update" />');

			$.ajax({
				type: 'post',
				url: ajaxurl,
				data: {
					action: 'oceanwp_notice_button_click'
				},
				success: function (response) {
					if (response.success) {
						if (response.data.status === 'active') {
							location.assign(response.data.pluginUrl)
						}
					}

					owp_notification.isLoading = false;
				},
				complete: function () {
				}
			});
		}

	}

	owp_notification.init();

});