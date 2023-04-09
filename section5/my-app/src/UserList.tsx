import "./UserList.css";
import {useState} from "react"

const UserList = () => {
  const defaultUsers =[
    { id: "1", name:"Mike", age:29 },
    { id: "2", name:"Ken", age:30 },
    { id: "3", name:"Mika", age:35 },
    { id: "4", name:"Jhon", age:27 },
  ];

  const [users, setUsers] = useState(defaultUsers);

  const addUser = (addUser: { id: string ,name: string, age: number }) => {
    setUsers( (prevUsers) => [...prevUsers, addUser]);
  };

  return (
    <div>
      <ul className="user-list-body">
        { users.map((v)=>{
          return (
            <li key={v.id}>
              {v.name} {v.age}
            </li>
          );
        })}
      </ul>
      <button onClick={()=> addUser({ id: Math.random().toString() ,name: "John",age: 20 })}>
        Add User
      </button>
    </div>
  );

};

export default UserList;
