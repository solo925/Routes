import React from 'react';
import useFetch from '../../hooks/use-fetch';

function Comments() {
  const { data, loading } = useFetch("dummy url");
  if(loading) return <h4>fetching comments please wait</h4>
  return (
      <div>
          <h2>List of comments</h2>
          
    </div>
  )
}

export default Comments;