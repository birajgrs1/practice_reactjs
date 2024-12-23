import React from "react";

const Post = () => {
  return (
    <div className="card post-card">
     
      {/* <img src="image_url_here" className="card-img-top" alt="Descriptive text" /> */}
      <div className="card-body">
        <h5 className="card-title">Example Post Title</h5>
        <p className="card-text">
          This is a placeholder description for the post. You can replace this text with dynamic content.
        </p>
        <a href="/post-details" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Post;
