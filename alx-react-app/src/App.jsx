import { UserContext } from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Provider wraps components that need access to userData
    // value prop is the data we're sharing
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;