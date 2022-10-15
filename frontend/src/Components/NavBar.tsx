import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <h1>EA: React Seminar</h1>
            <ul className="navbar">
                <li className="navbar">
                    <Link  to="/" >User List</Link>
                </li>
                <li className="navbar">
                    <Link  to="/add" >New User</Link>
                </li>
            </ul>
        </div>
    );
  }

export default NavBar;