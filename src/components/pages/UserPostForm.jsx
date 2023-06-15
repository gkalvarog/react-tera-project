import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Default from "../templates/Default";
import Loading from "../atoms/Loading";

export default function UserPostForm() {
  const { userId } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    fetch(`https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}/posts`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setTitle("");
      setContent("");
      setIsLoading(false);
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div className="create-post">
        <h1>Post</h1>

        <form onSubmit={handleFormSubmit} className="create-post__form">
          <div className="create-post__form-name">
            <label htmlFor="name">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="name"
              name="title"
            />
          </div>

          <div className="create-post__form-content">
            <label htmlFor="content">Text</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="content"
              id="content"
            ></textarea>
          </div>

          <button className="button-primary">Send</button>
        </form>
      </div>
    </Default>
  );
}
