import { useState } from 'react';


export const IsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogIn = () => {
        setIsLoggedIn(true);
    };


    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
      <div>
          <button onClick={handleLogIn}>Log in</button>
          <button onClick={handleLogout}>Logout</button>

          <div>User is {isLoggedIn ? 'Logged in' : 'Logged Out'}</div>
      </div>
    )
}
