//import { Link } from "react-router-dom";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../model/User";
import * as userService from '../Service/UserService'
import {useNavigate } from "react-router-dom"
//import { STATES } from "mongoose";
//import {useHistory} from 'react-router-dom'


type InputChange = ChangeEvent<HTMLInputElement>;


const AddUser: React.FC = () => {

  let navigate = useNavigate();
  const [userState, setState] = useState<User>({
    name: "",
    password: "", 
    email: "",
  }); //especifiquem els unics camps requerits, onchange per omplir els parametres

  const handleVariableChange = (e: InputChange) => {
    setState({ ...userState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await userService.createUser(userState);
    console.log(res);
    navigate('/');
  };

  
  return (
    <div className="container">
      <h2>New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="card p-4">
          <div className="mb-3">
            <div className="card-body">
              <label>Name : </label>
                <input 
                  type="text" 
                  name="name" 
                  onChange={handleVariableChange} />

            </div>
          </div>
        </div>
        
        <div className="card p-4">
            <div className="mb-3">
            <div className="card-body">
                <label>Email : </label>
                <input
                    type="email"
                    name="email"
                    onChange={handleVariableChange}
                />
            </div>
            </div>
        </div>

        <div className="card p-4">
            <div className="mb-3">
            <label>Password : </label>
            <input 
                type="text"
                name="password" 
                onChange={handleVariableChange}  
            />
            </div>
            <div className="button">
            <input 
                type="submit" 
            />            
            </div>
        </div>

      </form>
    </div>
  );
};
export default AddUser;
