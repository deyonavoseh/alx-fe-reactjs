import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Recipe Sharing Application</h1>
        
        <nav style={{ margin: '20px 0' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/favorites" style={{ marginRight: '15px' }}>Favorites</Link>
          <Link to="/recommendations">Recommendations</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;