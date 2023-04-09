import "./Content.css";
import Header from "./Header";
import React, { useState } from 'react';

type Props = {
  user: { name: string; age: number };
};

const Content = (props: Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  // onChangeNameとonChangeAgeにわける
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChangeName",e.target.value);
    setName(e.target.value);
  }

  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChanegAge",e.target.value);
    setAge(age);
  }

  const onSubmit = () => {

  };

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
        </form>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Content;
