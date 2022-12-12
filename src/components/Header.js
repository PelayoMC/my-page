import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Header() {
  return (
    <div className="header">
      <nav className="header-content">
        <Button variant="text" component={Link} to={""}>
          Main
        </Button>
        <Button variant="text" component={Link} to={"about"}>
          About
        </Button>
        <Button variant="text" component={Link} to={"studies"}>
          Studies
        </Button>
        <Button variant="text" component={Link} to={"work"}>
          Work
        </Button>
        <Button variant="text" component={Link} to={"contact"}>
          Contact
        </Button>
        <select
          class="idioma form-select form-select-sm ms-auto me-3"
          aria-label="Default select example"
        >
          <option selected value="esp">
            🇪🇸
          </option>
          <option value="ing">🇬🇧</option>
        </select>
      </nav>
    </div>
  );
}

export default Header;
