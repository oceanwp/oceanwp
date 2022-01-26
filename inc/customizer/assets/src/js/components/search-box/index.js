
import React from "react";
import SearchBoxModal from "./modal";

const SearchBox = ( { ...props } ) => {

    return <div className="ocean-customizer-search-box-wrap">
        <SearchBoxModal show = { props.show } onHide = { props.onHide } SearchHandler = { props.searchHandler } ></SearchBoxModal>
    </div>;

}

SearchBox.defaultProps = {
    show: false
}

export default SearchBox;