import React from 'react';
import classes from "./HeaderLogo.module.css";

const HeaderLogo = () => {
    return (
        <div className={classes.headerLogo}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuXcbt3eZOXSlxtLuqc8NjvVOTgrV0qfrUVZ2yN4UC_W5d-ABs" alt="logo"/>
        </div>
    );
};

export default HeaderLogo;