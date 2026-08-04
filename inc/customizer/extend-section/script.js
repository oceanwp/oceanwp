/* global _, jQuery */

( function ( $ ) {
	const api = wp.customize;
	const nestedSectionsByParent = new Map();
	const nestedPanelsByParent = new Map();
	const controlsBySection = new Map();
	const sectionsByPanel = new Map();

	function rebuildNestedMap( collection, parentKey, targetMap ) {
		targetMap.clear();

		collection.each( function ( child ) {
			const parentId = child.params[ parentKey ];

			if ( ! parentId ) {
				return;
			}

			if ( ! targetMap.has( parentId ) ) {
				targetMap.set( parentId, [] );
			}

			targetMap.get( parentId ).push( child );
		} );
	}

	function getNestedChildren( parentId, collection, parentKey, targetMap ) {
		if ( ! targetMap.has( parentId ) ) {
			rebuildNestedMap( collection, parentKey, targetMap );
		}

		return targetMap.get( parentId ) || [];
	}

	function rebuildDirectChildrenMaps() {
		controlsBySection.clear();
		sectionsByPanel.clear();

		api.control.each( function ( control ) {
			const sectionId = control.section();

			if ( ! sectionId ) {
				return;
			}

			if ( ! controlsBySection.has( sectionId ) ) {
				controlsBySection.set( sectionId, [] );
			}

			controlsBySection.get( sectionId ).push( control );
		} );

		api.section.each( function ( section ) {
			const panelId = section.panel();

			if ( ! panelId ) {
				return;
			}

			if ( ! sectionsByPanel.has( panelId ) ) {
				sectionsByPanel.set( panelId, [] );
			}

			sectionsByPanel.get( panelId ).push( section );
		} );
	}

	function getSectionControls( sectionId ) {
		if ( ! controlsBySection.size ) {
			rebuildDirectChildrenMaps();
		}

		return controlsBySection.get( sectionId ) || [];
	}

	function getPanelSections( panelId ) {
		if ( ! sectionsByPanel.size ) {
			rebuildDirectChildrenMaps();
		}

		return sectionsByPanel.get( panelId ) || [];
	}

	/**
	 * Keep a parent translated while any of its nested children is expanded.
	 * Checking the final state avoids an old child removing the class after a
	 * newly clicked sibling has already opened.
	 *
	 * @param {Object} parent    Parent Customizer section or panel.
	 * @param {Array}  children  Nested children of the parent.
	 * @param {string} className Class toggled on the parent container.
	 */
	function syncParentState( parent, children, className ) {
		if ( ! parent ) {
			return;
		}

		const hasExpandedChild = children.some( function ( child ) {
			return child.expanded();
		} );

		parent.contentContainer.toggleClass( className, hasExpandedChild );
	}

	function scheduleParentStateSync( parent, children, className ) {
		window.requestAnimationFrame( function () {
			syncParentState( parent, children, className );
		} );
	}

	api.bind( 'pane-contents-reflowed', function () {
		rebuildNestedMap( api.section, 'section', nestedSectionsByParent );
		rebuildNestedMap( api.panel, 'panel', nestedPanelsByParent );
		rebuildDirectChildrenMaps();

		const sections = [];

		api.section.each( function ( section ) {
			if (
				'owp_section' !== section.params.type ||
				'undefined' === typeof section.params.section
			) {
				return;
			}

			sections.push( section );
		} );

		sections.sort( api.utils.prioritySort ).reverse();

		$.each( sections, function ( i, section ) {
			const parentContainer = $(
				'#customize-control-' + section.params.after
			);

			section.headContainer.addClass(
				section.params.section_class || ''
			);

			if ( parentContainer.length ) {
				parentContainer.after( section.headContainer );
			}
		} );

		const panels = [];

		api.panel.each( function ( panel ) {
			if (
				'owp_panel' !== panel.params.type ||
				'undefined' === typeof panel.params.panel
			) {
				return;
			}

			panels.push( panel );
		} );

		panels.sort( api.utils.prioritySort ).reverse();

		$.each( panels, function ( i, panel ) {
			const parentContainer = $(
				'#sub-accordion-panel-' + panel.params.panel
			);

			const panelMeta = parentContainer.children( '.panel-meta' );

			if ( panelMeta.length ) {
				panelMeta.after( panel.headContainer );
			}
		} );
	} );

	// Extend Panel
	const _panelEmbed = wp.customize.Panel.prototype.embed;
	const _panelIsContextuallyActive =
		wp.customize.Panel.prototype.isContextuallyActive;
	const _panelAttachEvents = wp.customize.Panel.prototype.attachEvents;

	wp.customize.Panel = wp.customize.Panel.extend( {
		attachEvents() {
			if (
				'owp_panel' !== this.params.type ||
				'undefined' === typeof this.params.panel
			) {
				_panelAttachEvents.call( this );

				return;
			}

			_panelAttachEvents.call( this );

			const panel = this;

			panel.expanded.bind( function () {
				const parent = api.panel( panel.params.panel );
				const children = getNestedChildren(
					panel.params.panel,
					api.panel,
					'panel',
					nestedPanelsByParent
				);

				scheduleParentStateSync(
					parent,
					children,
					'current-panel-parent'
				);
			} );

			panel.container
				.find( '.customize-panel-back' )
				.off( 'click keydown' )
				.on( 'click keydown', function ( event ) {
					if ( api.utils.isKeydownButNotEnterEvent( event ) ) {
						return;
					}

					event.preventDefault(); // Keep this AFTER the key filter above

					const parent = api.panel( panel.params.panel );

					if ( panel.expanded() && parent ) {
						parent.expand();
					}
				} );
		},
		embed() {
			if (
				'owp_panel' !== this.params.type ||
				'undefined' === typeof this.params.panel
			) {
				_panelEmbed.call( this );

				return;
			}

			_panelEmbed.call( this );

			const panel = this;
			const parentContainer = $(
				'#sub-accordion-panel-' + this.params.panel
			);

			parentContainer.append( panel.headContainer );
		},
		isContextuallyActive() {
			if ( 'owp_panel' !== this.params.type ) {
				return _panelIsContextuallyActive.call( this );
			}

			const panel = this;
			const children = getPanelSections( panel.id ).slice();

			getNestedChildren(
				panel.id,
				api.panel,
				'panel',
				nestedPanelsByParent
			).forEach( function ( child ) {
				children.push( child );
			} );

			children.sort( api.utils.prioritySort );

			let activeCount = 0;

			_( children ).each( function ( child ) {
				if ( child.active() && child.isContextuallyActive() ) {
					activeCount += 1;
				}
			} );

			return activeCount !== 0;
		},
	} );

	// Extend Section
	const _sectionEmbed = wp.customize.Section.prototype.embed;
	const _sectionExpand = wp.customize.Section.prototype.expand;
	const _sectionIsContextuallyActive =
		wp.customize.Section.prototype.isContextuallyActive;
	const _sectionAttachEvents = wp.customize.Section.prototype.attachEvents;

	wp.customize.Section = wp.customize.Section.extend( {
		expand( params ) {
			document.dispatchEvent(
				new CustomEvent( 'ocean-customizer-before-section-expand', {
					detail: { sectionId: this.id },
				} )
			);

			return _sectionExpand.call( this, params );
		},
		attachEvents() {
			if (
				'owp_section' !== this.params.type ||
				'undefined' === typeof this.params.section
			) {
				_sectionAttachEvents.call( this );

				return;
			}

			_sectionAttachEvents.call( this );

			const section = this;

			section.expanded.bind( function () {
				const parent = api.section( section.params.section );
				const children = getNestedChildren(
					section.params.section,
					api.section,
					'section',
					nestedSectionsByParent
				);

				scheduleParentStateSync(
					parent,
					children,
					'current-section-parent'
				);
			} );

			section.container
				.find( '.customize-section-back' )
				.off( 'click keydown' )
				.on( 'click keydown', function ( event ) {
					if ( api.utils.isKeydownButNotEnterEvent( event ) ) {
						return;
					}

					event.preventDefault(); // Keep this AFTER the key filter above

					const parent = api.section( section.params.section );

					if ( section.expanded() && parent ) {
						parent.expand();
					}
				} );
		},
		embed() {
			if (
				'owp_section' !== this.params.type ||
				'undefined' === typeof this.params.section
			) {
				_sectionEmbed.call( this );

				return;
			}

			_sectionEmbed.call( this );

			const section = this;
			const parentContainer = $(
				'#sub-accordion-section-' + this.params.section
			);

			parentContainer.append( section.headContainer );
		},
		isContextuallyActive() {
			if ( 'owp_section' !== this.params.type ) {
				return _sectionIsContextuallyActive.call( this );
			}

			const section = this;
			const children = getSectionControls( section.id ).slice();

			getNestedChildren(
				section.id,
				api.section,
				'section',
				nestedSectionsByParent
			).forEach( function ( child ) {
				children.push( child );
			} );

			children.sort( api.utils.prioritySort );

			let activeCount = 0;

			_( children ).each( function ( child ) {
				if ( 'undefined' !== typeof child.isContextuallyActive ) {
					if ( child.active() && child.isContextuallyActive() ) {
						activeCount += 1;
					}
				} else if ( child.active() ) {
					activeCount += 1;
				}
			} );

			return activeCount !== 0;
		},
	} );
} )( jQuery );
