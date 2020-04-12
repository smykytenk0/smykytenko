import React from 'react';
import classes from "./HeaderSearch.module.css";

const headerSearch = () => {
    return (
        <div className={classes.headerSearch}>
            <textarea placeholder="Search..."></textarea>
        </div>
    )
}

export default headerSearch;