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
    
      return (
       
        <div className="App">
          {users.map((user) => {
            return(
                <li className="List">
                    <div className="List-header">
                        <h2>Nom: {user.name}</h2>
                    </div>
                    <p>Mail: {user.email}</p>
                    <p className="List-note">ID: {user._id}</p>
                </li>
            );
          })}
        </div>
      );
    
}

export default UserList;