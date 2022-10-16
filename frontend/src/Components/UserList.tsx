import { Link, Navigate, useNavigate } from "react-router-dom"
import {User} from '../model/User'
import React from 'react'
import { ChangeEvent, useEffect, useState } from 'react'
import * as userService from '../Service/UserService'


interface Props {
    user:User
}

export const UserList:React.FC = (/*{user}: Props*/) => {

    const [users, setUsers] = useState<any[]>([]);
    let navigate = useNavigate();

    const loadUsers = async () => {
      const res = await userService.getAllUser();
      setUsers(res.data);
    }
    
    useEffect(() => {
      loadUsers()
    }, [])

    const remove = async (name: any) => {
      const res = await userService.delUser(name);
      console.log(res);
    }

    const deleteUser = (user: any) => {
      remove(user).then((response: any) => {
        console.log(response.data);
        navigate('/');
        
        
      })
    }
    
      return (
       
        <div className="App">
          {users.map((user) => {
            return(
              <div className="container">
                <li className="col-md-4 card p-2">
                    <div className="List-header">
                        <h4>Nom: {user.name}</h4>
                    </div>
                    <p>Mail: {user.email}</p>
                    <p className="List-note">ID: {user._id}</p>
                    <button id='deleteBtn' onClick={ () => deleteUser(user.name)}>
                      
                      <Link to={"/users"}> Delete</Link>
                      
                    </button>
                    
                </li>
              </div>
            );
          })}
        </div>
      );
}
export default UserList;