( function( $ ) {

	var api = wp.customize;

	api.bind( 'pane-contents-reflowed', function() {

		var sections = [];

		api.section.each( function( section ) {

		if (
			'owp_section' !== section.params.type ||
			'undefined' === typeof section.params.section
		) {

			return;

		}

		sections.push( section );

		});

		sections.sort( api.utils.prioritySort ).reverse();

		$.each( sections, function( i, section ) {

			var parentContainer = $( '#customize-control-' + section.params.after );

			section.headContainer.addClass( section.params.section_class )

			parentContainer.after( section.headContainer );

		});

		var panels = [];

		api.panel.each( function( panel ) {

		if (
			'owp_panel' !== panel.params.type ||
			'undefined' === typeof panel.params.panel
		) {

			return;

		}

		panels.push( panel );

		});

		panels.sort( api.utils.prioritySort ).reverse();

		$.each( panels, function( i, panel ) {

		var parentContainer = $( '#sub-accordion-panel-' + panel.params.panel );

		parentContainer.children( '.panel-meta' ).after( panel.headContainer );

		});

	});

	// Extend Panel
	var _panelEmbed = wp.customize.Panel.prototype.embed;
	var _panelIsContextuallyActive = wp.customize.Panel.prototype.isContextuallyActive;
	var _panelAttachEvents = wp.customize.Panel.prototype.attachEvents;

	wp.customize.Panel = wp.customize.Panel.extend({
		attachEvents: function() {

		if (
			'owp_panel' !== this.params.type ||
			'undefined' === typeof this.params.panel
		) {

			_panelAttachEvents.call( this );

			return;

		}

		_panelAttachEvents.call( this );

		var panel = this;

		panel.expanded.bind( function( expanded ) {

			var parent = api.panel( panel.params.panel );

			if ( expanded ) {

			parent.contentContainer.addClass( 'current-panel-parent' );

			} else {

			parent.contentContainer.removeClass( 'current-panel-parent' );

			}

		});

		panel.container.find( '.customize-panel-back' )
			.off( 'click keydown' )
			.on( 'click keydown', function( event ) {

			if ( api.utils.isKeydownButNotEnterEvent( event ) ) {

				return;

			}

			event.preventDefault(); // Keep this AFTER the key filter above

			if ( panel.expanded() ) {

				api.panel( panel.params.panel ).expand();

			}

			});

		},
		embed: function() {

		if (
			'owp_panel' !== this.params.type ||
			'undefined' === typeof this.params.panel
		) {

			_panelEmbed.call( this );

			return;

		}

		_panelEmbed.call( this );

		var panel = this;
		var parentContainer = $( '#sub-accordion-panel-' + this.params.panel );

		parentContainer.append( panel.headContainer );

		},
		isContextuallyActive: function() {

		if (
			'owp_panel' !== this.params.type
		) {

			return _panelIsContextuallyActive.call( this );

		}

		var panel = this;
		var children = this._children( 'panel', 'section' );

		api.panel.each( function( child ) {

			if ( ! child.params.panel ) {
				return;
			}

			if ( child.params.panel !== panel.id ) {
				return;
			}

			children.push( child );

		});

		children.sort( api.utils.prioritySort );

		var activeCount = 0;

		_( children ).each( function ( child ) {

			if ( child.active() && child.isContextuallyActive() ) {
				activeCount += 1;
			}

		});

		return ( activeCount !== 0 );

		}

	});


	// Extend Section
	var _sectionEmbed = wp.customize.Section.prototype.embed;
	var _sectionIsContextuallyActive = wp.customize.Section.prototype.isContextuallyActive;
	var _sectionAttachEvents = wp.customize.Section.prototype.attachEvents;

	wp.customize.Section = wp.customize.Section.extend({
		attachEvents: function() {

		if (
			'owp_section' !== this.params.type ||
			'undefined' === typeof this.params.section
		) {

			_sectionAttachEvents.call( this );

			return;

		}

		_sectionAttachEvents.call( this );

		var section = this;

		section.expanded.bind( function( expanded ) {

			var parent = api.section( section.params.section );

			if ( expanded ) {
				parent.contentContainer.addClass( 'current-section-parent' );
			} else {
				parent.contentContainer.removeClass( 'current-section-parent' );
			}

		});

		section.container.find( '.customize-section-back' )
			.off( 'click keydown' )
			.on( 'click keydown', function( event ) {

				if ( api.utils.isKeydownButNotEnterEvent( event ) ) {
					return;
				}

				event.preventDefault(); // Keep this AFTER the key filter above

				if ( section.expanded() ) {
					api.section( section.params.section ).expand();
				}

			});

		},
		embed: function() {

		if (
			'owp_section' !== this.params.type ||
			'undefined' === typeof this.params.section
		) {

			_sectionEmbed.call( this );

			return;

		}

		_sectionEmbed.call( this );

		var section = this;
		var parentContainer = $( '#sub-accordion-section-' + this.params.section );

		parentContainer.append( section.headContainer );

		},
		isContextuallyActive: function() {

		if (
			'owp_section' !== this.params.type
		) {

			return _sectionIsContextuallyActive.call( this );

		}

		var section = this;
		var children = this._children( 'section', 'control' );

		api.section.each( function( child ) {

			if ( ! child.params.section ) {
				return;
			}

			if ( child.params.section !== section.id ) {
				return;
			}

			children.push( child );

		});

		children.sort( api.utils.prioritySort );

		var activeCount = 0;

		_( children ).each( function ( child ) {

			if ( 'undefined' !== typeof child.isContextuallyActive ) {

				if ( child.active() && child.isContextuallyActive() ) {

					activeCount += 1;

				}

			} else {

				if ( child.active() ) {

					activeCount += 1;

				}

			}

		});

		return ( activeCount !== 0 );

		}

	});

})( jQuery );

// var headerIcon = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M21,1H3C1.35,1,0,2.35,0,4V23H24V4c0-1.65-1.35-3-3-3ZM3,3H21c.55,0,1,.45,1,1v4H2V4c0-.55,.45-1,1-1Zm-1,18V10H22v11H2Z"/></svg>';
// var topbarIcon = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M21,1H3C1.35,1,0,2.35,0,4V23H24V4c0-1.65-1.35-3-3-3ZM3,3H21c.55,0,1,.45,1,1v4H2V4c0-.55,.45-1,1-1Zm-1,18V10H22v11H2Z"/></svg>';
// var typoIcon = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M24,14.5v1.5h-2v-1.5c0-.28-.22-.5-.5-.5h-2.5v9h-2V14h-2.5c-.28,0-.5,.22-.5,.5v1.5h-2v-1.5c0-1.38,1.12-2.5,2.5-2.5h7c1.38,0,2.5,1.12,2.5,2.5ZM15,3c.55,0,1,.45,1,1v2h2v-2c0-1.65-1.35-3-3-3H3C1.35,1,0,2.35,0,4v2H2v-2c0-.55,.45-1,1-1h5V23h2V3h5Z"/></svg>';
// var siteSettingIcon ='<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m6,4.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm2.5-1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm15.5,0v19h-5.755c.482-.602.879-1.274,1.173-2h2.582v-11H2v11h2.582c.294.726.691,1.398,1.173,2H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,4V3c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v4h20Zm-7.599,4.506l-1.401-.613v4.107c0,.552-.449,1-1,1s-1-.448-1-1v-4.107l-1.401.613c-2.187.957-3.599,3.113-3.599,5.494,0,2.159,1.158,4.133,3,5.197v1.803h2v-3.07l-.599-.262c-1.458-.639-2.401-2.078-2.401-3.668,0-.991.368-1.924,1-2.641v.641c0,1.654,1.346,3,3,3s3-1.346,3-3v-.641c.632.717,1,1.649,1,2.641,0,1.59-.942,3.029-2.401,3.668l-.599.262v3.07h2v-1.803c1.842-1.064,3-3.038,3-5.197,0-2.381-1.413-4.537-3.599-5.494Z"/></svg>';
// var pageSettingIcon ='<svg id="Layer_1" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m21 1h-18a3 3 0 0 0 -3 3v19h24v-19a3 3 0 0 0 -3-3zm-18 2h18a1 1 0 0 1 1 1v3h-20v-3a1 1 0 0 1 1-1zm-1 18v-12h20v12zm3-9h14v2h-14zm0 4h10v2h-10zm-2-11a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1 -1-1z"/></svg>';
// var footerIcon = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M21,1H3C1.35,1,0,2.35,0,4V23H24V4c0-1.65-1.35-3-3-3ZM3,3H21c.55,0,1,.45,1,1v4H2V4c0-.55,.45-1,1-1Zm-1,18V10H22v11H2Z"/></svg>';
// var blogIcon = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M21,2H3C1.35,2,0,3.35,0,5V22H24V5c0-1.65-1.35-3-3-3ZM3,4H21c.55,0,1,.45,1,1v2H2v-2c0-.55,.45-1,1-1Zm-1,16V9H22v11H2Zm2-9h6v2h-2v5h-2v-5h-2v-2Zm8,0h7v2h-7v-2Zm0,4h7v2h-7v-2Z"/></svg>';
// var colorIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="_01_align_center" data-name="01 align center"><circle cx="17.5" cy="9.5" r="1.5"/><circle cx="12.5" cy="6.5" r="1.5"/><circle cx="7.5" cy="9.5" r="1.5"/><circle cx="7.5" cy="15.5" r="1.5"/><path d="M12.083,24A12,12,0,0,1,3.745,3.371,11.885,11.885,0,0,1,12.5.007,12.155,12.155,0,0,1,24.08,11.7a11.924,11.924,0,0,1-.775,4.552,1.888,1.888,0,0,1-1.377,1.177,1.912,1.912,0,0,1-1.769-.521l-.1-.1a3.567,3.567,0,0,0-6.089,2.553l.04,4.516-.924.077C12.753,23.978,12.421,24,12.083,24Zm0-22a10,10,0,0,0-.09,20l-.024-2.625A5.6,5.6,0,0,1,13.6,15.39h0a5.57,5.57,0,0,1,7.872,0l.014.014a9.892,9.892,0,0,0,.595-3.655,10.127,10.127,0,0,0-9.645-9.743C12.317,2,12.2,2,12.082,2Z"/></g></svg>';

(function ($) {
    var api = wp.customize;
    var processedSections = {}; // Store processed section IDs

	if (typeof wp !== 'undefined' && wp.customize && ! oceanSectionCustomize.isOE) {
		return;
	}

    // Function to add an icon to an existing section
    function addIconToCustomizerSection(sectionId, iconClass) {
        api.bind('pane-contents-reflowed', function () {
            api.section.each(function (section) {
                if (section && sectionId === section.id && !processedSections[sectionId]) {
                    var sectionTitle = section.headContainer.find('.accordion-section-title');
                    //sectionTitle.prepend('<span class="customizer-section-icon ' + iconClass + '"></span');
					var $span = $('<span>').addClass('ocean-customizer-section-icon').html(iconClass);
                    sectionTitle.prepend($span);
                    processedSections[sectionId] = true; // Mark section as processed
                }
            });
        });
    }

    addIconToCustomizerSection('ocean_typography', oceanSectionCustomize.sectionIcons.typo);
	addIconToCustomizerSection('ocean_colors', oceanSectionCustomize.sectionIcons.color);
	addIconToCustomizerSection('ocean_styles_and_settings', oceanSectionCustomize.sectionIcons.siteSetting);
	addIconToCustomizerSection('ocean_site_page_settings', oceanSectionCustomize.sectionIcons.pageSetting);
	addIconToCustomizerSection('ocean_topbar_settings', oceanSectionCustomize.sectionIcons.topbar);
	addIconToCustomizerSection('ocean_header_settings', oceanSectionCustomize.sectionIcons.header);
	addIconToCustomizerSection('ocean_blog_settings', oceanSectionCustomize.sectionIcons.blog);
	addIconToCustomizerSection('ocean_site_layout_section', oceanSectionCustomize.sectionIcons.siteLayout);
	addIconToCustomizerSection('ocean_site_icon_section', oceanSectionCustomize.sectionIcons.siteIcon);
	addIconToCustomizerSection('ocean_site_button_section', oceanSectionCustomize.sectionIcons.siteButton);
	addIconToCustomizerSection('ocean_site_forms_section', oceanSectionCustomize.sectionIcons.siteForm);
	addIconToCustomizerSection('ocean_scroll_to_top_section', oceanSectionCustomize.sectionIcons.siteScrollToTop);
	addIconToCustomizerSection('ocean_site_pagination_section', oceanSectionCustomize.sectionIcons.sitePagination);
	addIconToCustomizerSection('ocean_section_page_search_result', oceanSectionCustomize.sectionIcons.sitePageSearchResult);
	addIconToCustomizerSection('ocean_section_page_404_error', oceanSectionCustomize.sectionIcons.sitePage404);
	addIconToCustomizerSection('ocean_footer_widget_settings', oceanSectionCustomize.sectionIcons.footerWidget);
	addIconToCustomizerSection('ocean_footer_copyright_settings', oceanSectionCustomize.sectionIcons.footerCopyright);


})(jQuery);

