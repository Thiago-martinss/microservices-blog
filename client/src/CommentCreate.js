/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import axios from 'axios';

export default ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await axios.post(`http://posts.com/posts/${postId}/comments`, {
        content,
      });
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
