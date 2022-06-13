// Document Ready
jQuery(document).ready(function ($) {

    var ThemePanelWrap = $('.oceanwp-tp-wrap');

    var ThemePanelSidebar = ThemePanelWrap.find('.oceanwp-tp-sidebar');
    var ThemePanelPanes = ThemePanelWrap.find('.oceanwp-tp-panes');


    var hash = window.location.hash;
    var slug = hash.substring(1, hash.length);

    if (hash && slug && slug !== oceanwpThemePanel.initialSection) {
        tpGoTo(slug);
    }

    setTimeout(function() {
        loadSidebarWarnings();
    }, 1000);

    window['showNotify'] = function (status = 'success', message = 'Saved successfully', timeout = true) {
        if (status) {
            window['addSuccessNotify'](message, timeout);
        } else {
            window['addFailureNotify'](message, timeout);
        }
    }

    window['addSuccessNotify'] = function addSuccessNotify(message = 'Saved successfully', timeout = true, seconds = 4000) {
        $('#oceanwp-notifyType').text(message);
        $(".oceanwp-notify").addClass("active");
        $("#oceanwp-notifyType").addClass("success");
        if (timeout) {
            setTimeout(function () {
                $(".oceanwp-notify").removeClass("active");
                $("#oceanwp-notifyType").removeClass("success");
            }, seconds);
        }
    }

    window['addFailureNotify'] = function (message = 'Something went wrong', timeout = true) {
        $('#oceanwp-notifyType').text(message);
        $(".oceanwp-notify").addClass("active");
        $("#oceanwp-notifyType").addClass("failure");
        if (timeout) {
            setTimeout(function () {
                $(".oceanwp-notify").removeClass("active");
                $("#oceanwp-notifyType").removeClass("failure");
            }, 4000);
        }
    }

    wp.updates.oceanwp_update_pluginSuccessInstalled = function (data) {
        $(document).trigger('wp-plugin-install-success', data);
        window['showNotify']('success', oceanwp_cp_textdomain.plugin_is_successfully_installed, false);
        var $btn = jQuery('[data-plugin-slug="' + data.slug + '"]');
        if ($btn.length) {
            $btn.removeClass('disabled');
            $btn.text(oceanwp_cp_textdomain.installed);
        }

        if (data.slug) {
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }
    }

    wp.updates.oceanwp_update_pluginSuccessUpdated = function (data) {
        window['showNotify']('success', oceanwp_cp_textdomain.plugin_is_successfully_updated, false);
        var $btn = jQuery('[data-plugin-slug="' + data.slug + '"]');
        if ($btn.length) {
            $btn.removeClass('disabled');
            $btn.text(oceanwp_cp_textdomain.Updated);
        }

        if (data.slug) {
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }
    }

    wp.updates.oceanwp_update_themeSuccess = function (data) {
        window['showNotify']('success', oceanwp_cp_textdomain.child_theme_installed, false);
        var $btn = jQuery('.oceanwp_install_child_theme');
        if ($btn.length) {
            $btn.removeClass('disabled');
            $btn.text(oceanwp_cp_textdomain.installed);
        }

        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }

    wp.updates.oceanwp_update_pluginInstalling = function (data) {
        window['showNotify']('success', oceanwp_cp_textdomain.installing_plugin, false);
    }

    wp.updates.oceanwp_update_pluginUpdating = function (data) {
        window['showNotify']('success', oceanwp_cp_textdomain.updating_plugin, false);
    }

    wp.updates.oceanwp_update_themeInstalling = function (data) {
        window['showNotify']('success', oceanwp_cp_textdomain.installing_child_theme, false);
    }

    wp.updates.oceanwp_update_pluginError = function (xhr, status, error) {
        window['showNotify']('error', error);
    }

    $(document).on('click', '.oceanwp-tp-sidebar-link, .oceanwp-tp-topbar-link', function (event) {
        event.preventDefault();

        var $this = $(this);
        var hash = $this.attr('href');
        var slug = hash.substring(1, hash.length);

        window.location.hash = hash;
        tpGoTo(slug);
    });

    $(document).on('click', '.oceanwp_install_plugin', function (event) {
        event.preventDefault();
        $(this).addClass('disabled');
        var args = {
            slug: $(this).data('pluginSlug'),
            success: wp.updates.oceanwp_update_pluginSuccessInstalled,
            error: wp.updates.oceanwp_update_pluginError,
            beforeSend: wp.updates.oceanwp_update_pluginInstalling
        };
        wp.updates.ajax('install-plugin', args)
    });


    $(document).on( 'click', '.oceanwp_update_plugin', function( event ) {
        var $button = $( event.target );
        event.preventDefault();

        wp.updates.maybeRequestFilesystemCredentials( event );

        var args = {
            plugin: $button.data( 'plugin' ),
            slug:   $button.data( 'slug' ),
            success: wp.updates.oceanwp_update_pluginSuccessUpdated,
            error: wp.updates.oceanwp_update_pluginError,
            beforeSend: wp.updates.oceanwp_update_pluginUpdating
        };

        $(document).trigger( 'wp-plugin-updating', args );

        wp.updates.ajax( 'update-plugin', args );
    } );


    $(document).on('click', '.oceanwp_install_child_theme', function (event) {
        event.preventDefault();
        $(this).addClass('disabled');

        $.ajax({
            method: 'POST',
            url: _wpUtilSettings.ajax.url,
            data: {
                action: 'oceanwp_cp_child_theme_install',
                nonce: oceanwpThemePanel.nonce,
            },
            success: wp.updates.oceanwp_update_themeSuccess,
            error: wp.updates.oceanwp_update_pluginError,
            beforeSend: wp.updates.oceanwp_update_themeInstalling,
        });

    });

    function tpGoTo(slug) {

        var selectorLink = '.oceanwp-tp-sidebar-link[href="#'+slug+'"]';
        if( $(selectorLink).length < 1 ) {
            slug = 'home';
            window.location.href = '#home';
        }

        ThemePanelPanes.addClass('loading-pane');

        $.ajax({
            type: 'POST',
            url: _wpUtilSettings.ajax.url,
            data: {
                action: 'oceanwp_cp_load_pane_action',
                slug: slug
            },
            success: function success(res) {
                ThemePanelPanes.empty();
                ThemePanelPanes.append(res.data);
                ThemePanelPanes.removeClass('loading-pane');

                ThemePanelSidebar.find('.oceanwp-is-active').removeClass('oceanwp-is-active');
                ThemePanelSidebar.find('[href=#' + slug + ']').parent().addClass('oceanwp-is-active');

                if (slug == 'install-demos' && window['owpDemoImport'] !== undefined) {
                    window['owpDemoImport'].init();
                }
                if( slug == 'system-info' && window['owpSystemInfoGetter'] !== undefined ) {
                    window['owpSystemInfoGetter']();
                }
                if(slug == 'white-label' && window['init_white_label_uploader'] !== undefined) {
                    window['init_white_label_uploader']();
                }
                if(slug == 'customizer') {
                    maybeAllCheckboxesActive();
                }

                initHandlersAfterLoadPanel();
            }
        });
    }

    function maybeAllCheckboxesActive() {
        let allCheckboxes = $('#ocean-customizer-items').find('input[type="checkbox"]');
        let allCheckboxesLength = allCheckboxes.length;
        let checkedCheckboxes = 0;
        allCheckboxes.each(function() {
            if( $(this).prop('checked') ) {
                checkedCheckboxes++;
            }
        });
        if( allCheckboxesLength == checkedCheckboxes ) {
            $('#customizer-reset-bulk').prop('checked', true);
        }
    }

    function initHandlersAfterLoadPanel() {
        if($('#owp_recaptcha_version').length) {
            $('#owp_recaptcha_version').trigger('change');
        }
        if($('#owp_api_images_integration').length) {
            jQuery('#owp_api_images_integration').trigger('change');
        }
        if($('#owp_freepik_integration').length) {
            jQuery('#owp_freepik_integration').trigger('change');
        }
        if($('#owp_freepik_image_width').length) {
            jQuery('#owp_freepik_image_width').trigger('change');
        }
        $( document.body ).trigger( 'op_panel_loaded' );
    }

    function loadSidebarWarnings() {
        $.ajax({
            type: 'POST',
            url: _wpUtilSettings.ajax.url,
            data: {
                action: 'oceanwp_cp_load_sidebar_warnings_action'
            },
            success: function success(res) {
                if( res.success ) {
                    for( var item_key in res.data ) {
                        var selector = '.oceanwp-tp-sidebar-link[href="#'+item_key+'"]';
                        if( $(selector).length ) {
                            $(selector).find('.oceanwp-tp-warning-badge').remove();
                            $(selector).append(res.data[item_key]);
                        }
                   }
                }
            }
        });
    }

});