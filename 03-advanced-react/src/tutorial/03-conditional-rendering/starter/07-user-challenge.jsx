import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({ name: "Bhakti" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </>
      )}
    </>
  );
};

export default UserChallenge;
