import "./Content.css";
import Header from "./Header";
import React, { useState } from 'react';

type Props = {
  user: { name: string; age: number };
};

const Content = (props: Props) => {
  const [name, setName] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChange",e.target.value);
    setName(e.target.value);
  }
  const onSubmit = () => {

  };

  return(
    <div>
      <Header></Header>
      <div className="content-body">
        <p>{name}</p>
        <form className="content-form">
          <label>Name:</label>
          <input onChange={(e)=>onChange(e)}></input>
          <label>Age:</label>
          <input></input>
        </form>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Content;
