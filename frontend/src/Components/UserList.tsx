import { Link } from "react-router-dom"
import {User} from '../model/User'
import React from 'react'
import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'


interface Props {
    user:User
}

export const UserList:React.FC = (/*{user}: Props*/) => {
    const [users, setUsers] = useState<any[]>([]);

    const loadUsers = async () => {
      const res = await axios.get('http://localhost:5432/api/users');
      setUsers(res.data);
    }
    
    useEffect(() => {
      loadUsers()
    }, [])

    // const deleteUser = () => {
    //   UserService.remove(user)
    //       .then((response: any) => {
    //           console.log(response.data);
    //           navigate("/");
    //       })
    //       .catch((e: Error) => {
    //           console.log(e);
    //       });
    // };
    
      return (
       
        <div className="App">
          {users.map((user) => {
            return(
                <li className="col-md-4 card p-2">
                    <div className="List-header">
                        <h4>Nom: {user.name}</h4>
                    </div>
                    <p>Mail: {user.email}</p>
                    <p className="List-note">ID: {user._id}</p>
                    {/* <button id='deleteBtn' onClick={deleteUser}>Delete</button> */}
                </li>
            );
          })}
        </div>
      );
}
export default UserList;