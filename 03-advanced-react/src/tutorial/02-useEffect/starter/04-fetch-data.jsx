import { useEffect } from "react";
import { useState } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const response = await fetch(url);
        const usersList = await response.json();

        setUsers(usersList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsersList();
  }, []);
  return (
    <section>
      <h2>GitHub User List</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="avatar_picture" />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
