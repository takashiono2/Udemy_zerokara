import "./Content.css";
import Header from "./Header";
import { useState } from "react";

type Props = {
  user: {
    name: string,
    age: number,
  };
};

const Content = (props: Props) => {
  const [count, setCount] = useState(0);
  // let count = 0;

  const onClickPlus = () =>{
    setCount(count+1);
    console.log("Plus");
  };

  return(
    <div>
      <Header></Header>
      <div className="content-body">
        <span>{count}</span>
        <button onClick={onClickPlus}>Plus</button>
      </div>
    </div>
  );
};

export default Content;