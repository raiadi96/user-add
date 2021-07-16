import { useState } from "react";
import "./App.css";
import AddUser from "./User/AddUser";
import UserList from "./User/userList";

function App() {
  const [user, updateUser] = useState([]);
  const addItemHandler = (uName, uAge) => {
    updateUser((prevstate) => {
      return [
        ...prevstate,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser addUserItem={addItemHandler}></AddUser>
      <UserList users = {user}></UserList>
    </div>
  );
}

export default App;
