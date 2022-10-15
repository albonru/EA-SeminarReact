import { Link } from "react-router-dom";
import { isWhiteSpaceLike } from "typescript";

function Header() {
    let s = {
        backgroundColor:'black',
        color: 'white'
    }
    return(
        <div> 
            <h1 style= {s}>EA: React Seminar</h1>  
        </div>
    );
}

export default Header;