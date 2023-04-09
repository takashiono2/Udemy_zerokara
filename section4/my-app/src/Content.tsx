import "./Content.css";
import Header from "./Header";
import React, { useState } from 'react';

type Props = {
  updateCallback: (user: { name: string; age: number })=>void;
  // user: { name: string; age: number };
};

const Content = (props: Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  // const [submitted, setSubmitted] = useState({ name:"", age:0 });
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("onChangeName",e.target.value);
    setName(e.target.value);
  };

  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("onChanegAge",Number(e.target.value));
    const age = Number(e.target.value);
    setAge(age);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const user = { name, age };
    props.updateCallback(user);

    // setSubmitted({name,age})
    setName("");
    setAge(0);
    console.log("onsbumit")
  };

  console.log("Render");

  return(
    <div>
      <Header></Header>
      <div className="content-body">
        <p>{name}</p>
        <p>{age}</p>
        <form className="content-form">
          <label>Name:</label>
          <input onChange={(e)=>onChangeName(e)}></input>
          <label>Age:</label>
          <input onChange={(e)=>onChangeAge(e)}></input>
          <button onClick={(e)=>onSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Content;
