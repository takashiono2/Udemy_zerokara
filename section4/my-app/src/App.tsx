import Footer from "./Footer";
import Content from "./Content";
import {useState} from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({name: "",age: 0});
  const updateUser = (updated:{ name: string, age: number }) => {
    setUser(updated);
  };

  return (
    <div className="App">
      <h1>{user.name} {user.age}</h1>
      <Content updateCallback={updateUser}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
