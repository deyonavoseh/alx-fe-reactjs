import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    instructions: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handle blur (when user leaves a field)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validateField(name, formData[name]);
  };

  // Validate individual field
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'title':
        if (!value.trim()) {
          error = 'Recipe title is required';
        } else if (value.trim().length < 3) {
          error = 'Title must be at least 3 characters';
        }
        break;

      case 'summary':
        if (!value.trim()) {
          error = 'Summary is required';
        } else if (value.trim().length < 10) {
          error = 'Summary must be at least 10 characters';
        }
        break;

      case 'ingredients':
        if (!value.trim()) {
          error = 'Ingredients are required';
        } else {
          const ingredientList = value.split('\n').filter((item) => item.trim());
          if (ingredientList.length < 2) {
            error = 'Please add at least 2 ingredients (one per line)';
          }
        }
        break;

      case 'instructions':
        if (!value.trim()) {
          error = 'Preparation steps are required';
        } else if (value.trim().length < 20) {
          error = 'Instructions must be at least 20 characters';
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error === '';
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (key !== 'image') {
        // image is optional
        if (!validateField(key, formData[key])) {
          isValid = false;
        }
      }
    });

    // Mark all fields as touched
    setTouched({
      title: true,
      summary: true,
      ingredients: true,
      instructions: true,
    });

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send data to a backend
      console.log('Form submitted:', formData);
      
      // Show success message
      alert('Recipe added successfully!');
      
      // Navigate back to home page
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">Add New Recipe</h1>
          <p className="mt-2 text-blue-100">Share your culinary creation with the world</p>
        </div>
      </header>

      {/* Form Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${
                  errors.title && touched.title
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="Enter recipe title"
              />
              {errors.title && touched.title && (
                <p className="mt-2 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Recipe Summary */}
            <div>
              <label htmlFor="summary" className="block text-sm font-semibold text-gray-700 mb-2">
                Summary *
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="3"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 resize-none ${
                  errors.summary && touched.summary
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="Brief description of your recipe"
              />
              {errors.summary && touched.summary && (
                <p className="mt-2 text-sm text-red-600">{errors.summary}</p>
              )}
            </div>

            {/* Image URL (Optional) */}
            <div>
              <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                Image URL (Optional)
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-semibold text-gray-700 mb-2">
                Ingredients * <span className="text-gray-500 font-normal">(one per line, minimum 2)</span>
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="6"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 resize-none font-mono text-sm ${
                  errors.ingredients && touched.ingredients
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="400g spaghetti&#10;200g bacon&#10;4 eggs&#10;100g parmesan cheese"
              />
              {errors.ingredients && touched.ingredients && (
                <p className="mt-2 text-sm text-red-600">{errors.ingredients}</p>
              )}
            </div>

            {/* Preparation Steps */}
            <div>
              <label htmlFor="instructions" className="block text-sm font-semibold text-gray-700 mb-2">
                Preparation Steps *
              </label>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="8"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 resize-none ${
                  errors.instructions && touched.instructions
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="Describe the cooking steps in detail..."
              />
              {errors.instructions && touched.instructions && (
                <p className="mt-2 text-sm text-red-600">{errors.instructions}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
              >
                Add Recipe
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddRecipeForm;