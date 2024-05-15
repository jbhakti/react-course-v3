import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const userDetails = await response.json();
        setUser(userDetails);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error Occurred</h2>;
  }
  if (user) {
    return (
      <div>
        <img
          src={user.avatar_url}
          alt="user_avatar"
          style={{ width: "150px", borderRadius: "25px" }}
        />
        <h2>{user.name}</h2>
        <h4>Works At: {user.company}</h4>
        <p>{user.bio}</p>
      </div>
    );
  }
};
export default MultipleReturnsFetchData;
