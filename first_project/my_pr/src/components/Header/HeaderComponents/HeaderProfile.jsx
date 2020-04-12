import React from 'react';
import classes from "./HeaderProfile.module.css";

const HeaderProfile = () => {
    return (
        <div className={classes.headerProfile}>
           <select>
               <option className={classes.option} selected>
                       Profile
               </option>
               <option className={classes.option}>Settings</option>
               <option className={classes.option}>Personal Info</option>
               <option className={classes.option}>Exit</option>
           </select>
        </div>
    );
}

export default HeaderProfile;