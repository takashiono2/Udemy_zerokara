import "./UserList.css";
import { useState } from "react";

type Props = {
  users: { id: string ,name: string, age: number }[],
};

const UserList = (props: Props) => {
  const [under, setUnder] = useState(0);
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>)=> {
    setUnder(Number(e.target.value));
  }

  return (
    <div>
      <select onChange={onChangeSelect}>
        <option value={"10"}>over10</option>
        <option value={"20"}>over20</option>
        <option value={"30"}>over30</option>
        <option value={"40"}>over40</option>
      </select>
      <ul className="user-list-body">
        { props.users
        .filter((v)=>(v.age > under))
        .map((v)=>{
          return (
            <li key={v.id}>
              {v.name} {v.age}
            </li>
          );
        })}
      </ul>
    </div>
  );

};

export default UserList;
