import React from "react";
import Post from "./Post";
// import { PostLists } from "../Store/Contexts/post-lists";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";
// import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  // const { postList } = useContext(PostLists);
  const postList = useLoaderData();

  // Using context to get the post list and fetching status

  //   useEffect(() => {
  //     fetch("https://dummyjson.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         addInitialPosts(data.posts);
  //       });
  //   },[]);

  return (
    <>
      {/* {fetching && <LoadingSpinner />}       */}
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {/* {postList.length === 0 && <WelcomeMessage />} */}
      {/* This is another variation of the welcome message logic */}

      {/* {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))} */}
    </>
  );
};

export const PostLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    })
    .catch((error) => {
      if (error.name !== "AbortError") {
        console.error(error);
      }
    });
};

export default PostList;
