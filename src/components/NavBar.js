// import React from "react";
// import { NavLink } from "react-router-dom";

// function NavBar() {
//   return <div>{/*{code here}*/}
  
//   <h1>NavBar</h1>
//   </div>;
// }

// export default NavBar;
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
return (
<div>
<NavLink exact to="/" activeClassName="active">Home</NavLink>
<NavLink to="/movies" activeClassName="active">Movies</NavLink>
<NavLink to="/directors" activeClassName="active">Directors</NavLink>
<NavLink to="/actors" activeClassName="active">Actors</NavLink>
</div>
);
}

export default NavBar;




