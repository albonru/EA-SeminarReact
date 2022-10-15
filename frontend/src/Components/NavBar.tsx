import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className= "collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" >User List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add" >New User</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
  }

export default NavBar;