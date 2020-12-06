import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
      <div >
        <div className="header">
        </div>
        <NavLink className = "navbar-link" to="/">home</NavLink>
        <NavLink className = "navbar-link" to="/entries">entries</NavLink>
      </div>
      
    )
  }

export default NavBar;