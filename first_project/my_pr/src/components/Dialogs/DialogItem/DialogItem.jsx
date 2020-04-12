import React from 'react';
import classes from "./DialogItem.module.css"
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <div className="dialog-Ava">
                <img src={props.img} alt="ava"></img>
            </div>
            <div className="dialog-Name">
                <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;