/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
export default ({ postId }) => {
  const [comments, setComments] = useState([]);
 
  const fetchData = async (postIdToGet) => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postIdToGet}/comments`
    );
 
    setComments(res.data);
  };
 
  useEffect(() => {
    fetchData(postId);
  }, [postId]);
 
  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });
 
  return <ul>{renderedComments}</ul>;
};