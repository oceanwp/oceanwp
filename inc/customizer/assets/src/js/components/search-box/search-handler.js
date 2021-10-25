
class SearchHandler {

    /**
     * SearchHandler Constructor
     *
     * @returns
     */
    constructor() {
        /**
         * Check Controls Are Empty or Not Empty
         */
        if ( this.controls ) {
            return true;
        }

        /**
         * Map The Controls
         */
        this.controls = jQuery.map( _wpCustomizeSettings.controls, function( control, cid ) {
            jQuery.map( _wpCustomizeSettings.sections, function( section, i ) {
                if ( control.section == section.id ) {
                    jQuery.map( _wpCustomizeSettings.panels, function( panel, i ) {
                        if ( '' == section.panel ) {
                            control.panelName = section.title;
                        }

                        if ( section.panel == panel.id ) {
                            control.sectionName = section.title;
                            control.panel = section.panel;
                            control.panelName = panel.title;
                        }
                    });
                 }
            });

            return [control];
        });

    }

    /**
     * Search In Controls
     *
     * @param {string} string
     * @returns
     */
    searchInControls( string ) {
        if ( ! string ) {
            return [];
        }

        return this.controls.filter( control => {

            if ( control.panelName === null ) control.panelName = '';
            if ( control.sectionName === null ) control.sectionName = '';

            const regex = new RegExp(string, 'gi');

            // if ( typeof control.content !== 'undefined' ) {
            //     if ( control.content.match(regex) )
            //         return control.content.match(regex);
            // }

            if ( typeof control.label !== 'undefined' ) {
                if ( control.label.match(regex) )
                    return control.label.match(regex);
            }

            if ( typeof control.panelName !== 'undefined' ) {
                if ( control.panelName.match(regex) )
                    return control.panelName.match(regex);
            }

            if ( typeof control.sectionName !== 'undefined' ) {
                if ( control.sectionName.match(regex) )
                    return control.sectionName.match(regex);
            }
        });
    }
}

export default SearchHandler;