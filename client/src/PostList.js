/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://posts.com/posts');
      setPosts(res.data);
    } catch (error) {
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
          <p className="card-text">{post.content}</p>
        </div>
        <a href={`/posts/${post.id}`} className="btn btn-primary">
          Read More
        </a>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
