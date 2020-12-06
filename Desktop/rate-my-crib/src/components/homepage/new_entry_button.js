import {NavLink} from "react-router-dom";

const NewEntry = () => {
    return(
      <div>
        <NavLink to="/new_entry"
          className="newentry"> <button> new entry
          </button>
        </NavLink>
      </div>
      
    )
  }

export default NewEntry;