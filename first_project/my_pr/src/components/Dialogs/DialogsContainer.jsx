import React from 'react';
import {AddMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(AddMessageActionCreator());
    };

    let onMessageChange = (text) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };
    return (
        <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} newMessage={state.NewMessageText} dialogsPage={state}/>
    );
};

export default DialogsContainer;