import React from 'react';
import useFetch from '../../hooks/use-fetch';

function RecipePage() {
  const { loading, data, error } = useFetch('https://dummyjson.com/recipes');

  if (loading) {
    return <h4>Please wait, Fetching recipe...</h4>;
  }

  if (error) {
    return <h4>Error loading recipes: {error.message}</h4>;
  }

  console.log(data);

  // Assuming that the data has a "recipes" property that is an array
  const recipes = Array.isArray(data) ? data : data.recipes || [];

  return (
    <div className="recipe-list-container">
      <h2 className="title">List All the Recipes</h2>
      <div className="recipe-list">
        <ul>
          {recipes.map((singleItem, index) => (
            <li key={index} className="recipe-item">
              <img src={singleItem.image} alt={singleItem.name} className="recipe-image" />
              <div className="recipe-details">
                <h3 className="recipe-name">{singleItem.name}</h3>
                <p className="recipe-description">{singleItem.description}</p>
                <p><strong>Ingredients:</strong> {singleItem.ingredients.join(', ')}</p>
                <p><strong>Instructions:</strong> {singleItem.instructions}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipePage;

