import React, { useState } from "react";
import "./Post.css";

import Avatar from "@material-ui/core/Avatar";

const Post = ({ userName, caption, imageUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{userName}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="" />

      <p className="post__text">
        <strong>{userName}</strong> {caption}
      </p>
    </div>
  );
};

export default Post;
