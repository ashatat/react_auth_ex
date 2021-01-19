import { NavLink } from 'react-router-dom';

import './style.css';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/a/about-us/1">
            About us
          </NavLink>
          <NavLink exact to="/login">
            Log in
          </NavLink>
          <NavLink exact to="/login/rajaa">
            Log in2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
