import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profile (Protected)</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </div>

      <div style={{ padding: "12px", border: "1px solid #ddd" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
