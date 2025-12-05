import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button onClick={() => setIsEditing(true)} style={{ margin: '10px 0' }}>
        Edit Recipe
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <h3>Edit Recipe</h3>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          required
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          required
          rows="4"
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px', margin: '5px' }}>
        Save Changes
      </button>
      <button
        type="button"
        onClick={() => setIsEditing(false)}
        style={{ padding: '10px 20px', margin: '5px' }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;