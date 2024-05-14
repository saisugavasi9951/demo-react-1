import React from "react";
import './page-banner.css';

const PageBanner = ({HeadingText}) => {
    return(
        <div className="container-fluid banner-fluid">
            <div className="container banner-container">
                <h1>{HeadingText}</h1>
            </div>
        </div>
    )
}

export default PageBanner;