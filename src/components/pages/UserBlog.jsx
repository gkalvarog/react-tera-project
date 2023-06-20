import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Default from "../templates/Default";
import Loading from "../atoms/Loading";
import UserBio from "../molecules/UserBio";
import PostListWrapper from "../molecules/PostListWrapper";

export default function UserBlog() {
  const { userId } = useParams();

  const [user, setUser] = useState({});
  const [posts, setPost] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      const [userResponse, postsResponse] = await Promise.all([
        fetch(
          `https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}`
        ).then((res) => res.json()),
        fetch(
          `https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}/posts`
        ).then((res) => res.json()),
      ]);

      setUser(userResponse);
      setPost(postsResponse);
      setIsLoading(false);
    };

    getApiData();
  }, [userId]);

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div className="wrapper">
        <div className="user-blog">
          <UserBio user={user} />
          <PostListWrapper posts={posts} />
        </div>
      </div>
    </Default>
  );
}
