import React from 'react';
import {AddPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state =props.store.getState()

    let addPost = () =>{
        props.store.dispatch(AddPostActionCreator());
    };

    let updateNewPostText = (text) =>{
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} NewPostText={state.NewPostText} posts={state.profilePage.posts}/>
    );
};

export default MyPostsContainer;