import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let newPostElement = React.createRef();

  let PostElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  let onAddPost = () =>{
      props.addPost();
  };

  let onPostChange = () =>{
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
  };

  return (
    <div className={classes.MyPosts}>
      <h2>My posts</h2>
      <div>
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.text}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>
        {PostElement}
      </div>
    </div>
  );
};

export default MyPosts;