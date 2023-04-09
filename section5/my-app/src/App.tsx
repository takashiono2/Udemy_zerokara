import "./App.css";
import { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

function App() {
  const [user, setUser] = useState({ name: "", age: 0 });

  const updateUser = (updated: { name: string; age: number }) => {
    setUser(updated);
  };

  return (
    <div className="App">
      <UserForm></UserForm>
      <UserList></UserList>
    </div>
  );
}

export default App;
