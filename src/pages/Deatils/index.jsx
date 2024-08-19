import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetailsPage() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null); // State to store recipe details
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error

  useEffect(() => {
    // Function to fetch recipe details
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipe(data); // Set the recipe details
      } catch (error) {
        setError(error); // Set the error if any
      } finally {
        setLoading(false); // Update loading status
      }
    };

    fetchRecipe(); // Fetch recipe details on component mount
  }, [id]); // Dependency array ensures the effect runs when 'id' changes

  if (loading) return <h4>Loading recipe details...</h4>; // Loading state
  if (error) return <h4>Error fetching recipe details: {error.message}</h4>; // Error state
  if (!recipe) return <h4>No recipe found</h4>; // No recipe found

  return (
    <div className="recipe-details-container">
      <h2 className="recipe-title">{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetailsPage;
