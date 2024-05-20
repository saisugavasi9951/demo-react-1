import './page-banner.css';
import React from "react";

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