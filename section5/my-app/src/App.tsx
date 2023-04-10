import "./App.css";
import { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

function App() {
  const defaultUsers =[
    { id: "1", name:"Mike", age:29 },
    { id: "2", name:"Ken", age:30 },
    { id: "3", name:"Mika", age:35 },
    { id: "4", name:"Jhon", age:27 },
  ];
  const [users, setUsers] = useState( defaultUsers );

  const addUser = (updated: { id: string, name: string; age: number }) => {
    setUsers( (prevUsers) => [...prevUsers, updated]);
  };

  return (
    <div className="App">
      <UserForm addUser={addUser}></UserForm>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
