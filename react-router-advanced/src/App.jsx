import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Router Advanced</h1>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/login"
            element={
              <Login
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />

          {/* Dynamic routes */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostDetails />} />

          {/* ALX REQUIRED dynamic blog route */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Protected route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
