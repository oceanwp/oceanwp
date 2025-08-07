// Document Ready
jQuery(document).ready(function ($) {

	var owp_notification = {

		isLoading: false,

		init: function () {

			if ($('.oe-panel-notice .owp-ocean-extra-plugin-inner').length) {
				this.render_actions();
				$(document).on('click', '.oe-panel-notice .owp-ocean-extra-plugin-inner .notice-dismiss', this.dismiss_notice);
				$(document).on('click', '.oe-panel-notice .owp-ocean-extra-plugin-inner .notice-actions button', this.main_action);
			}

		},

		render_actions: function () {
			$.ajax({
				type: 'post',
				url: owp_notification_i18n.ajax_url,
				data: {
					action: 'oceanwp_check_panel_notice_actions',
					_ajax_nonce: owp_notification_i18n.nonce
				},
				success: function (response) {
					if (response.data != '') {
						$('.oe-panel-notice .owp-notification-content').append(response.data);
					}
				},
				complete: function () {
				}
			});
		},

		dismiss_notice: function (evt) {

			$(evt.target).closest('.oe-panel-notice.notice-ocean-extra-plugin').remove();

			$.ajax(owp_notification_i18n.ajax_url, {
				type: 'POST',
				data: {
					action: 'oceanwp_dismissed_panel_notice',
					_ajax_nonce: owp_notification_i18n.nonce
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
				url: owp_notification_i18n.ajax_url,
				data: {
					action: 'oceanwp_panel_notice_button_click',
					_ajax_nonce: owp_notification_i18n.nonce
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