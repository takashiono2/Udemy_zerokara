import styles from "./App.module.css";
import { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

function App() {
  const defaultUsers = [
    { id: "1", name: "John", age: 12 },
    { id: "2", name: "Ken", age: 32 },
    { id: "3", name: "Mika", age: 42 },
    { id: "4", name: "Mac", age: 50 },
  ];
  const [users, setUsers] = useState(defaultUsers);
  const addUser = (add: { id: string; name: string; age: number }) => {
    setUsers((prevUsers) => [...prevUsers, add]);
  };

  const deleteUser = (deleteId: string) => {
    setUsers(users.filter(v => v.id !== deleteId));
    console.log('delete is id:',deleteId)
  };

  return (
    <div className={styles.body}>
      <UserForm addUser={addUser}></UserForm>
      <UserList users={users} deleteUser={deleteUser} ></UserList>
    </div>
  );
}

export default App;
