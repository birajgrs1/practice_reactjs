import { createContext, useReducer } from "react";

export const PostLists = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});


const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts; 
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, noOfTags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: { likes: reactions.likes, dislikes: reactions.dislikes }, 
        tags: noOfTags,
      },
    });
  };

  const addInitialPosts = (posts) => { 
    dispatchPostList({
      type: "ADD_INITIAL_POSTS", 
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    // console.log(`Delete post called for: ${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostLists.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostLists.Provider>
  );
};

export default PostListProvider;

/*
const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "Going to Mustang",
    body: "Hii Friends i am going to mustang for my vacations. ",
    reactions: 5,
    userId: "user-5",
    tags: ["vacation", "trekking", "Enjoy", "Mustang"],
  },

  {
    id: "2",
    title: "Complete Under Graduation",
    body: "Complete 4 year CSIT program. ",
    reactions: 8,
    userId: "user-7",
    tags: ["Under Graduation", "Unbelivable", "Joy"],
  },
];
*/
// export default PostListProvider;
