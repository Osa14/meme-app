import { NavLink } from "react-router";

export function NavComponent() {
  return (
    <nav className="navigation">

      <ul>
        <li>
        <NavLink to="/meme-app/"><img className="logo" src="https://i.ibb.co/JKpmHKG/logo.png"></img></NavLink>
        </li>
        <li>
          <NavLink to="/meme-app/regular"><div>Regular</div></NavLink>
        </li>
        <li>
          <NavLink to="/meme-app/hot"><div>Hot</div></NavLink>
        </li>
        <li>
          <NavLink to="/meme-app/add"><div>Add Meme</div></NavLink>
        </li>
        <li>
          <NavLink to="/meme-app/fav"><div>Favorites</div></NavLink>
        </li>
      </ul>
    </nav>
  );
}