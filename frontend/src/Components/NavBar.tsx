import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className= "collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link style={{color:"white"}} className="nav-link" to="/" >User List</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:"white"}} className="nav-link" to="/add" >New User</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
        </div>
    );
  }

export default NavBar;