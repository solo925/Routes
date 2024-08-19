import React from 'react';
import useFetch from '../../hooks/use-fetch';

function Comments() {
  const { data, loading, error } = useFetch('https://dummyjson.com/comments'); // Replace 'dummy url' with your actual API endpoint

  if (loading) return <h4>Fetching comments, please wait...</h4>;

  if (error) return <h4>Error loading comments: {error.message}</h4>;

  console.log(data);

  // Assuming that the data contains an array of comments directly or within a specific property
  const comments = Array.isArray(data) ? data : data.comments || [];

  return (
    <div>
      <h2>List of Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="comment-item">
            <p><strong>User:</strong> {comment.user.username}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
