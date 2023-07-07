import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const logout = () =>{
    localStorage.removeItem("user");
    
    window.location.reload(true);
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">YIM Booking </span>
        </Link>
        {user ? <div className="userContainer"> <FontAwesomeIcon icon={faUser} /> {user.username}  <span onClick={logout} className="logout">Log Out</span></div> : (
          <div className="navItems">
            {/* <button className="navButton">Register</button> */}
            {/* <button className="navButton">Login</button> */}
            <Link to="/register" >
          <span className="navButton">Register</span>
        </Link>
            <Link to="/login" >
          <span className="navButton">Login</span>
        </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
