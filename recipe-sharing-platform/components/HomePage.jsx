import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from JSON file
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">Recipe Sharing Platform</h1>
          <p className="mt-2 text-blue-100">Discover and share amazing recipes</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Add Recipe Button */}
        <div className="mb-8 flex justify-end">
          <Link
            to="/add-recipe"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            + Add New Recipe
          </Link>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:shadow-xl hover:scale-105">
                {/* Recipe Image */}
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />

                {/* Recipe Content */}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition duration-300">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {recipe.summary}
                  </p>
                  <div className="mt-4">
                    <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                      View Recipe →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No recipes available yet.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;