import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.avaName}>
        <img src="https://sun9-37.userapi.com/c628321/v628321677/3bc35/Nw-jx5UJK5k.jpg" alt="ava" className={classes.avatar}></img>
        <h1 className={classes.profileName}>Klymenko Iryna</h1>
      </div>
    </div>
  );
}

export default ProfileInfo;