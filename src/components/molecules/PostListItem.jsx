import React, { useState } from "react";
import { getFriendlyDate } from "../../helpers/date";

export default function PostListItem(props) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="user-blog__posts-item">
      <div className="user-blog__posts-item-photo">
        <img src={props.post.image} className="responsive" alt="" />
      </div>
      <h2
        onClick={() => setShowContent(!showContent)}
        className="user-blog__posts-item-title"
      >
        {props.post.title}
      </h2>
      <div className="user-blog__posts-date">
        Sent on {getFriendlyDate(props.post.createdAt)}
      </div>

      {showContent && (
        <div className="user-blog__post-content">{props.post.content}</div>
      )}
    </div>
  );
}
