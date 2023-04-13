import styles from "./UserForm.module.css";
import { useState } from "react";

type Props = {
  addUser: (user: { id: string; name: string; age: number }) => void;
};

const UserForm = (props: Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [isValidName, setIsValidName] = useState(true);
  const [errorMessages, setErrorMessages] = useState({
    nameError: "",
    ageError: "",
  });
  const [isValidAge, setIsValidAge] = useState(true);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 10 ){
      setIsValidName(false);
      setErrorMessages((prevMessages)=>{
        return{
          ...prevMessages,
          nameError:"10文字未満で入力してください",
        };
      });
    }else if(e.target.value.length === 0 ) {
      setIsValidName(false);
      setErrorMessages((prevMessages)=>{
        return{
          ...prevMessages,
          nameError:"名前を入力してください",
        };
      });
    }else{
      setIsValidName(true);
    }
    setName(e.target.value);
  };

  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = Number(e.target.value);
    if(age < 0|| age >= 200){
      setIsValidAge(false);
      setErrorMessages((prevMessages) => {
        return {
          ...prevMessages,
          ageError:"適切な年齢を入力してください",
        }
      })
    }else{
      setIsValidAge(true);
    }
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
      <div className={styles.body}>
        <form className={styles["content-form"]}>
          <label>Name:</label>
          <span className={styles["error-message"]}>
            {!isValidName && errorMessages.nameError}
          </span>
          <input
            className={`${!isValidName && styles.invalid}`}
            value={name}
            onChange={(e) => onChangeName(e)}
          ></input>
          <label>Age:</label>
          <span className={styles["error-message"]}>
            {!isValidAge && errorMessages.ageError}
          </span>
          <input
            className={`${!isValidAge && styles.invalid}`}
            type={"number"}
            value={age}
            onChange={(e) => onChangeAge(e)}>
          </input>
          <button disabled={!isValidName || !isValidAge } onClick={(e) => onSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
