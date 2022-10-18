//import { Link, Navigate, useNavigate } from "react-router-dom"
import {User} from '../model/User'
import React from 'react'
import { ChangeEvent, useEffect, useState } from 'react'
import * as userService from '../Service/UserService'
import ListItem from './ListItem';

interface Props {
    user:User
}

export const UserList:React.FC = (/*{user}: Props*/) => {

  const [users, setUsers] = useState<any[]>([]);
  

  const loadUsers = async () => {
    const res = await userService.getAllUser();
    setUsers(res.data);
  }
  
  useEffect(() => {
    loadUsers()
  }, [])

  
  return (
    <div className="App">
      {users.map((user) => {
        return(
          <ListItem user={user} key={user._id}/>
        );
      })}
    </div>
  );
}
export default UserList;
