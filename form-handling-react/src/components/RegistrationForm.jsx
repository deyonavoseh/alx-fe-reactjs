import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    setError("");

    // Mock API request
    console.log("User registered:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration (Controlled)</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
