// Document Ready
jQuery(document).ready(function ($) {

	var owp_notification = {

		isLoading: false,

		init: function () {

			if ($('.notice-ocean-onboarding .owp-ocean-extra-plugin-inner').length) {
				this.render_actions();
				$(document).on('click', '.notice-ocean-onboarding .owp-ocean-extra-plugin-inner .notice-dismiss', this.dismiss_notice);
				$(document).on('click', '.notice-ocean-onboarding .owp-ocean-extra-plugin-inner .notice-actions button', this.main_action);
			}

		},

		render_actions: function () {
			$.ajax({
				type: 'post',
				url: owp_notification_i18n.ajax_url,
				data: {
					action: 'oceanwp_check_notice_actions',
					_ajax_nonce: owp_notification_i18n.nonce
				},
				success: function (response) {
					if (response.data != '') {
						$('.notice-ocean-onboarding .owp-notification-content-wrap').append(response.data);
					}
				},
				complete: function () {
				}
			});
		},

		dismiss_notice: function (evt) {

			$(evt.target).closest('.notice-ocean-onboarding.notice-ocean-extra-plugin').remove();

			$.ajax(owp_notification_i18n.ajax_url, {
				type: 'POST',
				data: {
					action: 'oceanwp_dismissed_notice',
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
			} else if ($el.data('action') == 'install_activate_setup_wizard') {
				$(evt.target).text(owp_notification_i18n.installing_activating);
			}

			if (
				$el.data('action') === 'activate' ||
				$el.data('action') === 'install_activate' ||
				$el.data('action') === 'skip_only'
			) {
				$.ajax(owp_notification_i18n.ajax_url, {
					type: 'POST',
					data: {
						action: 'oceanwp_dismissed_notice',
						action_type: $el.data('action'),
						_ajax_nonce: owp_notification_i18n.nonce
					},
				});
			}

			$(evt.target).append('<i className="dashicons dashicons-update" />');

			$.ajax({
				type: 'post',
				url: owp_notification_i18n.ajax_url,
				data: {
					action: 'oceanwp_notice_button_click',
					_ajax_nonce: owp_notification_i18n.nonce
				},
				success: function (response) {
					if (response.success) {
						if (response.data.status === 'active') {

							if ($el.data('action') == 'install_activate_setup_wizard' || $el.data('action') == 'activate_setup_wizard') {

								const newToken = Math.random().toString(36).slice(2, 11);

								const currentState = {};

								localStorage.setItem('wizardState', JSON.stringify({
									// ...currentState,
									isOpen: true,
									wizardToken: newToken,
								}));

								const newUrl = new URL(response.data.pluginUrl, window.location.origin);
								newUrl.searchParams.set("onboarding", "active");
								newUrl.searchParams.set("_uid", newToken);

								window.history.replaceState(null, "", newUrl.toString());

								location.assign(newUrl.toString());
							} else {
								location.assign(response.data.pluginUrl)
							}
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