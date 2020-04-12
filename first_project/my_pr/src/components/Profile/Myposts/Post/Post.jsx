import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
  return (
      <div className={classes.postItem}>
          <div className={classes.postPhoto}>
              <img src="https://sun9-37.userapi.com/c628321/v628321677/3bc35/Nw-jx5UJK5k.jpg" alt="ava"/>
          </div>
          <span className={classes.postMessage}>
              {props.message}
          </span>
          <span className={classes.postLikes}>
              Likes:{props.likesCount}
          </span>
      </div>
  );
};

export default Post;