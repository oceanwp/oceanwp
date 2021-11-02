
import React from "react";
import { Form, ListGroup, Modal, Badge } from "react-bootstrap";
import { __ } from '@wordpress/i18n';

const SearchBoxModal = ( { ...props } ) => {

    const [ searchResults, setsearchResults ] = React.useState( '' );

    const switchThemeMode = () => {

        oceanCustomizerSearchOptions.lightMode = oceanCustomizerSearchOptions.lightMode === '1'
        || oceanCustomizerSearchOptions.lightMode === 'true'
        || oceanCustomizerSearchOptions.lightMode === true ? false : true;
        jQuery( '.modal-dialog.ocean-customize-search-modal' ).toggleClass( 'light-theme' );

        wp.ajax.post( 'ocean_update_search_box_light_mode', {
            lightMode: oceanCustomizerSearchOptions.lightMode
        } );
    }

    /**
     * Hide the Finder &
     * Expand Customize Sections When Click on Each Item
     *
     * @param {string} sectionName
     * @param {string} ElementID
     */
    const ClickHandler = ( sectionName, ElementID ) => {
        const section = wp.customize.section( sectionName );
        section.expand();
        setsearchResults( '' );
        jQuery( '.ocean-customize-search-modal' ).parent().fadeOut();
        jQuery( '.modal-backdrop.show' ).removeClass( 'show' );
        props.onHide();

        setTimeout( function() {
            jQuery( '.ocean-customize-search-modal .modal-header button.close' ).trigger( 'click' ).trigger( 'mouseup' )
            if ( jQuery( '#customize-control-' + ElementID ).length ) {

                jQuery( '#customize-controls .wp-full-overlay-sidebar-content' ).scrollTop(0);

                jQuery( '#customize-controls .wp-full-overlay-sidebar-content' ).animate(
                    { scrollTop: jQuery( '#customize-control-' + ElementID ).offset().top - 50 }
                , "slow" );

                jQuery( '#customize-control-' + ElementID ).addClass( 'ocean-control-focused' );
            }
        }, 1500 )

        setTimeout( () => {
            jQuery( '.ocean-control-focused' ).removeClass( 'ocean-control-focused' );
        }, 8000 );
    }

    /**
     * Search Handler
     *
     * @param {element} e
     * @returns
     */
    const onSearch = ( e ) => {
        var search = e.target.value;
        var searchInControlsResults = props.SearchHandler.searchInControls( search );
        searchInControlsResults = searchInControlsResults.slice(0, 30);
        setsearchResults( '' );

        if ( ! searchInControlsResults.length ) {
            return false;
        }

        /**
         * Prepare View From Search Result
         */
        var list = searchInControlsResults.map( function( data, index ) {

            if ( ! data.label || typeof data.panelName === 'undefined' ) {
                return;
            }

            return <ListGroup.Item
                key          = { index }
                id           = { `accordion-section-${data.section}` }
                className    = "accordion-section control-section control-section-default"
                aria-owns    = { `sub-accordion-section-${data.section}` }
                onClick      = { () => { ClickHandler( data.section, data.settings.default ) } }
                action>

                <Badge className="btn-primary">
                    { data.panelName }
                    { data.sectionName ? <span className="dashicons dashicons-arrow-right-alt2"></span> : '' }
                    { data.sectionName ? data.sectionName : '' }
                </Badge>

                <span>{ String(data.label) }</span>

                <span className="dashicons dashicons-editor-break"></span>

            </ListGroup.Item>
        })

        setsearchResults( list );
    }

    return <>
        <Modal
            size = "lg"
            show = { props.show }
            onHide = { props.onHide }
            dialogClassName = {
                oceanCustomizerSearchOptions.lightMode === '1'
                || oceanCustomizerSearchOptions.lightMode === 'true'
                || oceanCustomizerSearchOptions.lightMode === true ? "ocean-customize-search-modal light-theme" : "ocean-customize-search-modal" }
            aria-labelledby = "contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Form.Group className="full-width" controlId="ocean-wp-customize-search-input">
                    <i className="dashicons dashicons-search"></i>
                    <Form.Control type="text" placeholder={ __( "Search..." ) } onChange={ onSearch } />
                    <span onClick={ switchThemeMode } className="dashicons dashicons-lightbulb"></span>
                </Form.Group>
            </Modal.Header>
            <Modal.Body>
            { searchResults ?
                    <ListGroup>
                        { searchResults }
                    </ListGroup>
            : ""}
            </Modal.Body>
        </Modal>
    </>
}

export default SearchBoxModal;