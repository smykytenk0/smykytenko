import React from 'react';
import classes from "./Header.module.css";
import HeaderLogo from './HeaderComponents/HeaderLogo';
import HeaderSearch from './HeaderComponents/HeaderSearch';
import HeaderNotifications from './HeaderComponents/HeaderNotification';
import HeaderMusic from './HeaderComponents/HeaderMusic';
import HeaderProfile from './HeaderComponents/HeaderProfile';

const Header = () => {
    return (
        <header className={classes.header}>
            <HeaderLogo />
            <HeaderSearch />
            <HeaderNotifications />
            <HeaderMusic />
            <HeaderProfile />
        </header>
    );
}

export default Header;