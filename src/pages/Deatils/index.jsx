import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetailsPage() {
    const params = useParams();
    console.log(params)
  return (
      <div>
          <h4>I will be renderending details os a single ement in a page</h4>
          
    </div>
  )
}

export default RecipeDetailsPage