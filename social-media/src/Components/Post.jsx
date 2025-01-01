import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostLists } from "../Store/Contexts/post-lists";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostLists);
  const { likes, dislikes } = post.reactions;

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted to by {likes + dislikes} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
