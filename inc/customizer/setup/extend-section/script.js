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

var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="components-panel__icon" aria-hidden="true" focusable="false"><path d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 1.5c4.1 0 7.5 3.4 7.5 7.5v.1c-1.4-.8-3.3-1.7-3.4-1.8-.2-.1-.5-.1-.8.1l-2.9 2.1L9 11.3c-.2-.1-.4 0-.6.1l-3.7 2.2c-.1-.5-.2-1-.2-1.5 0-4.2 3.4-7.6 7.5-7.6zm0 15c-3.1 0-5.7-1.9-6.9-4.5l3.7-2.2 3.5 1.2c.2.1.5 0 .7-.1l2.9-2.1c.8.4 2.5 1.2 3.5 1.9-.9 3.3-3.9 5.8-7.4 5.8z"></path></svg>';

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

    // Usage example to add an icon to the "ocean_typography" section
    addIconToCustomizerSection('ocean_typography', svg); // Replace with your preferred icon class
})(jQuery);

