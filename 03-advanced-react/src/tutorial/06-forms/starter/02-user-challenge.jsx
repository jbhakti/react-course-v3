import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [userList, setUserList] = useState(data);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    setUserList([...userList, newUser]);
    setName("");
  };

  const deleteUser = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {userList.map((user) => {
        return (
          <>
            <h4 key={user.id}>{user.name}</h4>
            <button className="btn" onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </>
        );
      })}
    </div>
  );
};
export default UserChallenge;
