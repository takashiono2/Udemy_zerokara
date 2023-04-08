import Footer from "./Footer";
import Content from "./Content";
import "./App.css";

function App() {
  const user = {
    name: "example-user",
    age: 25,
    createdAt: new Date(2010, 0, 10),
  };

  return (
    <div className="App">
      <Content user={user}></Content>
      <Footer user={user}></Footer>
    </div>
  );
}

export default App;
