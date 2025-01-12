import { NavLink } from "react-router";

export function NavComponent() {
  return (
    <nav className="navigation">

      <ul>
        <li>
          <NavLink to="/"><div><h1>MEMIARZ.PL</h1></div></NavLink>
        </li>
        <li>
          <NavLink to="/regular"><div>Regular</div></NavLink>
        </li>
        <li>
          <NavLink to="/hot"><div>Hot</div></NavLink>
        </li>
        <li>
          <NavLink to="/add"><div>Add Meme</div></NavLink>
        </li>
        <li>
          <NavLink to="/fav"><div>Favorites</div></NavLink>
        </li>
      </ul>
    </nav>
  );
}