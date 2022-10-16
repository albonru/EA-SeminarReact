import { Link } from "react-router-dom";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../model/User";
import * as UserList from './UserList'

type InputChange = ChangeEvent<HTMLInputElement>;

const AddUser: React.FC = () => {
  const [user, setState] = useState<User>({
    name: "",
    password: "",
    email: "",
  }); //especifiquem els unics camps requerits, onchange per omplir els parametres

  const handleVariableChange = (e: InputChange) => {
    setState({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await UserList.createUser(user);
    console.log(res)
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
                    type="text"
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
