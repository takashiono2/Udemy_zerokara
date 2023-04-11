import { useState } from "react";
import "./UserList.css";

type Props = {
  users: { id: string; name: string; age: number }[];
};

const UserList = (props: Props) => {
  const [under, setUnder] = useState(0);
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnder(Number(e.target.value));
  };

  const filteredUsers = props.users.filter((v) => v.age > under);

  return (
    <div>
      <select onChange={onChangeSelect}>
        <option value={"10"}>Over 10</option>
        <option value={"20"}>Over 20</option>
        <option value={"30"}>Over 30</option>
        <option value={"50"}>Over 50</option>
      </select>
      <ul className="user-list-body">
        {filteredUsers.length <= 0 ? (
          <h1>No Users</h1>
        ) : (
          filteredUsers.map((v) => {
            return (
              <li key={v.id}>
                {v.name} {v.age}
              </li>
            );
          })
        )}
        {/* <li>Example-1</li>
      <li>Example-2</li>
      <li>Example-3</li> */}
      </ul>
    </div>
  );
};

export default UserList;
