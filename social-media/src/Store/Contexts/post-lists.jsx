import { createContext, useReducer } from "react";

export const PostLists = createContext({
  postList: [],
  addPost: () => {},
  // fetching: false,
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

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };


  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  // const [fetching, setFetching] = useState(false);

  /*
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });

    return () => {
      // console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);
*/
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
    tags: ["Under Graduation", "Unbelievable", "Joy"],
  },
];
*/
