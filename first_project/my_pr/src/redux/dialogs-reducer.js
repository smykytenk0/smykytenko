const UPDATE_NEW_MESSAGE_TEXT="UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE="ADD-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Sasha", img:"https://sun9-36.userapi.com/c847124/v847124467/183832/_IesVJHIqeE.jpg"},
        { id: 2, name: "Ira", img:"https://sun9-37.userapi.com/c628321/v628321677/3bc35/Nw-jx5UJK5k.jpg"},
        { id: 3, name: "Nadia", img:"https://sun9-47.userapi.com/c846018/v846018624/3f132/0ln28IyVVMU.jpg" },
        { id: 4, name: "Olya", img:"https://sun9-63.userapi.com/c639618/v639618440/165d2/W1tmqaEVf0E.jpg" },
        { id: 5, name: "Kriss", img:"https://sun9-71.userapi.com/c855024/v855024194/1a141/wRwHR5X-b4Q.jpg" },
        { id: 6, name: "Sashka", img:"https://sun9-51.userapi.com/qaxg5tR6pPOyXSW5CDDkyOUPO8CgAqKsyru_tA/H5TXr_BRtg4.jpg"},
        { id: 7, name: "Viktor", img:"https://sun9-67.userapi.com/c852320/v852320754/115950/-rySki9pspI.jpg"},
        { id: 8, name: "Slava", img:"https://sun9-21.userapi.com/c844721/v844721116/35c06/GLanoRunZRk.jpg"},
        { id: 9, name: "Yurko", img:"https://sun9-50.userapi.com/c637220/v637220838/3a85e/_jq2JBrE3Cc.jpg"},
        { id: 10, name: "Maksimka", img:"https://sun9-8.userapi.com/c639521/v639521802/415a9/qH5fPPk6YUk.jpg"},
        { id: 11, name: "Braslet", img:"https://sun9-52.userapi.com/c840623/v840623567/96745/3jt3uVQFRkg.jpg"},
        { id: 12, name: "Pavlo", img:"https://sun9-26.userapi.com/c831408/v831408474/12b784/aIHLD3M6APU.jpg"}
    ],
    messages: [
        { message: "HI" },
        { message: "I LOVE KLYMENKO SO MUCH" },
        { message: "SHE IS SUCH A BEUTIFUL GIRL" },
    ],
    NewMessageText:"",
}

const dialogsReducer = (state=initialState, action) =>{
    if(action.type ===UPDATE_NEW_MESSAGE_TEXT){
        state.NewMessageText=action.newMessage;
    }

    else if(action.type === ADD_MESSAGE){
        let newMessage = {
            message:state.NewMessageText,
        };
        state.messages.push(newMessage);
    }
    return state;
};

export const updateNewMessageTextActionCreator = (text) =>{
    return {
        type:UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text,
    }
};

export const AddMessageActionCreator = () => {
    return{
        type:ADD_MESSAGE
    }
};
export default dialogsReducer;