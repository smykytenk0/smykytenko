const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const ADD_POST="ADD-POST";

let initialState = {
    posts: [
        { message: "Congratulation!", likesCount: "0" },
        { message: "YOU'VE DONE IT!", likesCount: "0" },
    ],
    NewPostText:""
}

const profileReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:5,
                message: state.NewPostText,
                likesCount:0,
            };
            state.posts.push(newPost);
            state.NewPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.NewPostText=action.NewText;
            return state;
        default:
            return state;
    }
};

export const updateNewPostTextActionCreator = (text) =>{
    return {
        type:UPDATE_NEW_POST_TEXT,
        NewText: text,
    }
};

export const AddPostActionCreator = () =>{
    return {
        type:ADD_POST
    }
};
export default profileReducer;