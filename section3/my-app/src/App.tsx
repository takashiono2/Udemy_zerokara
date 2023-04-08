import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const user = {
    name: "example-user",
    age: 25,
    createdAt: new Date(2023,4,1),
  }
  return (
    <div className="App">
      <Header user={user}></Header>
      <Footer user={user}></Footer>
    </div>
  );
}

export default App;
