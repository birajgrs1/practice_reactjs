import { createContext, useReducer } from "react";

export const PostLists = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );

  const addPost = () => {};

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
    <PostLists.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostLists.Provider>
  );
};

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
export default PostListProvider;
