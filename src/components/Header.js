import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to={`about`}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
