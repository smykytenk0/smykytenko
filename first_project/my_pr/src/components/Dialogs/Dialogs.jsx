import React from 'react';
import classes from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let MessageElement = state.messages.map(message => <Message message={message.message} />);
    let DialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () =>{
        let text = newMessage.current.value;
        props.onMessageChange(text);
    };
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogElements}
            </div>
            <div className={classes.messages}>
                {MessageElement}
                <div>
                    <textarea ref={newMessage} onChange={onMessageChange} value={props.text}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;