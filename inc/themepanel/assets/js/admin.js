// Document Ready
jQuery(document).ready(function ($) {

    setTimeout(function() {
        loadAwaitingMods();
    }, 1000);

    function loadAwaitingMods() {
        $.ajax({
            type: 'POST',
            url: _wpUtilSettings.ajax.url,
            data: {
                action: 'oceanwp_cp_load_awaiting_mods_action'
            },
            success: function success(res) {
                if( res.success ) {
                    let container = jQuery('a.toplevel_page_oceanwp').find('.wp-menu-name')
                    if( container.length ) {
                        container .append(`<span class="awaiting-mod">${res.data.count}</span>`);
                    }
                }
            }
        });
    }

});