import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostLists } from "../Store/Contexts/post-lists";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostLists);
  const [fetching, setFetching] = useState(false);

  //   useEffect(() => {
  //     fetch("https://dummyjson.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         addInitialPosts(data.posts);
  //       });
  //   },[]);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
      {/* {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))} */}
    </>
  );
};

export default PostList;
