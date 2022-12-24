
import {NavLink} from 'react-router-dom';

const Navbar = () =>{

    return (
      <>
      <div className="navlinks">

      <NavLink class="active" to="/home">Home</NavLink>
      <NavLink class="active" to="/signin">Sign in</NavLink>
      <NavLink class="active" to="/signout">Sign out</NavLink>
      </div>
      </>
    );
};

export default Navbar
