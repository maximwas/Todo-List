import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../../feature/Post/postSlice";

const PostById = () => {
  const { id } = useParams();
  const post = useSelector(getPostById(id));

  return <div className="post">
    <Link to="/post">Back</Link>
    <h4> {post.title} </h4>
    <p>{ post.body }</p>
  </div>;
};

export default PostById;
