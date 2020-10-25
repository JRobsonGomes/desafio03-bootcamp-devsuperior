import React from "react"
import ImageLoader from "./ImageLoader"
import InfoLoader from "./InfoLoader"
import './styles.scss';

const SearchLoader = () => (
    <div className="search-loader-container">
        <div className="search-loader-row">
            <div className="search-loader-image">
                <ImageLoader />
            </div>
            <div className="search-loader-col-2">
                <InfoLoader />
            </div>
        </div>
    </div>
);

export default SearchLoader;