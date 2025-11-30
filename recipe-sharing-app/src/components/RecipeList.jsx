import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  // Show filtered recipes if search is active, otherwise show all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  const isFavorite = (recipeId) => favorites.includes(recipeId);

  return (
    <div>
      <h2>All Recipes</h2>
      {displayRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        displayRecipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            <button
              onClick={() =>
                isFavorite(recipe.id)
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
              style={{ marginLeft: '10px' }}
            >
              {isFavorite(recipe.id) ? '❤️ Unfavorite' : '🤍 Favorite'}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;