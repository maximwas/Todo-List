import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsonFetch, getPost } from "../../feature/Post/postSlice";
import { Link } from "react-router-dom"

import "./index.scss"

const Posts = () => {
  const posts = useSelector(getPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jsonFetch());
  }, []);

  return <div className="post-wrapper">
    {
      posts.map(post => (
        <div key={post.id} className="post">
          <h4>{ post.title }</h4>
          <p><Link to={`/post/${post.id}`}>{ post.body }</Link></p>
        </div>
      ))
    }
  </div>;
};

export default Posts;
