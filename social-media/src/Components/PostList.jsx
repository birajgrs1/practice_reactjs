import React, { useContext} from "react";
import Post from "./Post";
import { PostLists } from "../Store/Contexts/post-lists";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostLists);
  

  //   useEffect(() => {
  //     fetch("https://dummyjson.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         addInitialPosts(data.posts);
  //       });
  //   },[]);



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
