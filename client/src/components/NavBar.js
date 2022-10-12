import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav>
      <div id="nav-bar">
      <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/requests">REQUESTS</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT US</Link>
      </li>
      <li>
        {user ? (
          <button onClick={handleLogoutClick}>LOGOUT</button>
        ) : (
          <div id="login-signup">
            <Link to="/signup">SIGNUP</Link>
            <Link to="/login">LOGIN</Link>
          </div>
        )}
      </li>
      </ul>
      </div>
     
    </nav>
  );
}

export default NavBar;
