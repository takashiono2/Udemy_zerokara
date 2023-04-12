import styles from "./UserForm.module.css";
import { useState } from "react";

type Props = {
  addUser: (user: { id: string; name: string; age: number }) => void;
};

const UserForm = (props: Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const[isValidName, setIsValidName] = useState(true);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    ( e.target.value.length>10 ) ? setIsValidName(false) : setIsValidName(true)
    setName(e.target.value);
  };

  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = Number(e.target.value);
    setAge(age);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const user = { id: Math.random().toString(), name, age };
    props.addUser(user);
    setName("");
    setAge(0);
    console.log("onSubmit");
  };

  console.log("Render");

  return (
    <div>
      <div className="bg-orange-500 flex flex-col justify-center items-center p-4">
        <form className={styles["content-form"]}>
          <label>Name:</label>
          <input
            className={`${!isValidName && styles.invalid}`}
            value={name}
            onChange={(e) => onChangeName(e)}>
          </input>
          <label>Age:</label>
          <input value={age} onChange={(e) => onChangeAge(e)}></input>
          <button disabled={!isValidName} onClick={(e) => onSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
