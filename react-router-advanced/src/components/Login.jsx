import { Navigate, useNavigate } from "react-router-dom";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login</h2>
      <p>Click to simulate authentication.</p>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
