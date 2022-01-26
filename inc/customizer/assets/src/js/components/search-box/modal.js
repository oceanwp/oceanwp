
import React from "react";
import { Form, ListGroup, Modal, Badge } from "react-bootstrap";
import { __ } from '@wordpress/i18n';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

var searchInControlsAllResults,
    Preset = 0,
    Offset = 30;

const SearchBoxModal = ( { ...props } ) => {


    const [ searchResults, setsearchResults ] = React.useState( '' );

    const switchThemeMode = () => {

        oceanCustomizerSearchOptions.darkMode = oceanCustomizerSearchOptions.darkMode === '1'
        || oceanCustomizerSearchOptions.darkMode === 'true'
        || oceanCustomizerSearchOptions.darkMode === true ? false : true;
        jQuery( '.modal-dialog.ocean-customize-search-modal' ).toggleClass( 'light-theme' );

        wp.ajax.post( 'ocean_update_search_box_light_mode', {
            darkMode: oceanCustomizerSearchOptions.darkMode
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

    const createList = ( searchInControlsResults ) => {
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
        });

        return list;
    }

    const showMore = () => {
        if ( Offset >= 211 ) {
            return false;
        }

        Offset = Offset + 30;
        var searchInControlsResults = searchInControlsAllResults.slice( Preset, Offset );

        if ( ! searchInControlsResults.length ) {
            return false;
        }

        var list = createList( searchInControlsResults );

        setsearchResults( list );
    }

    /**
     * Search Handler
     *
     * @param {element} e
     * @returns
     */
    const onSearch = ( e ) => {
        var search = e.target.value;
        searchInControlsAllResults  = props.SearchHandler.searchInControls( search );
        Offset = 30
        var searchInControlsResults = searchInControlsAllResults.slice( Preset, Offset );
        setsearchResults( '' );

        if ( ! searchInControlsResults.length ) {
            return false;
        }

        var list = createList( searchInControlsResults );

        setsearchResults( list );
    }

    return <>
        <Modal
            size   = "lg"
            show   = { props.show }
            onHide = { props.onHide }
            dialogClassName = {
                oceanCustomizerSearchOptions.darkMode === '1'
                || oceanCustomizerSearchOptions.darkMode === 'true'
                || oceanCustomizerSearchOptions.darkMode === true ? "ocean-customize-search-modal" : "ocean-customize-search-modal light-theme" }
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
                    <PerfectScrollbar
                        onYReachEnd = { showMore }
                    >
                        <ListGroup>
                            { searchResults }
                        </ListGroup>
                    </PerfectScrollbar>
            : ""}
            </Modal.Body>
        </Modal>
    </>
}

export default SearchBoxModal;