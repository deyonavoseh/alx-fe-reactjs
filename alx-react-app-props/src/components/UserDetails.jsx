import { useContext } from 'react';
import { UserContext } from './UserContext';

function UserDetails() {
  // useContext "subscribes" to the context and gets the value
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
