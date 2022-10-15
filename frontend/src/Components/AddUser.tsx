import { Link } from "react-router-dom";
import React from 'react'

const AddUser: React.FC = () => {
    return(
        <div className="container">
            <h2>New User</h2>
            <form className="card p-4">
                <div className="mb-3">
                    <label>Name: </label>
                    <input type="text" />
                </div>
                <div className="mb-3">
                    <label>Email: </label>
                    <input type="text"  />
                </div>
                <div className="mb-3">
                    <label>Password: </label>
                    <input type="text" />
                </div>
                <div className="button">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
  }



export default AddUser;