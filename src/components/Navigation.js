import { NavLink } from "react-router";

export function NavComponent() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/">Regular</NavLink>
        </li>
        <li>
          <NavLink to="/hot">Hot</NavLink>
        </li>
      </ul>
      
    </nav>
  );
}