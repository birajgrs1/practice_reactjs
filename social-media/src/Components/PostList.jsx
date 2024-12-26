import React, { useContext } from "react";
import Post from "./Post";
import { PostLists } from "../Store/Contexts/post-lists";

const PostList = () =>{
    const {postList} = useContext(PostLists);
    return(
        <>
        {postList.map((post)=> <Post key={post.id}  post={post}/>)}
        </>
    );
}
export default PostList;