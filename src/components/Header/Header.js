import i18n from "i18next";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

function Header() {
  const location = useLocation();

  const style = {
    backgroundColor: "transparent",
    borderBottom: "2px solid black",
    opacity: 1,
  };

  const checkStyle = (url) => (location.pathname === url ? style : {});

  return (
    <div className="container header">
      <nav className="header-content">
        <Button style={checkStyle("/")} variant="text" component={Link} to={""}>
          Main
        </Button>
        <Button style={checkStyle("/about")} variant="text" component={Link} to={"about"}>
          About
        </Button>
        <Button style={checkStyle("/studies")} variant="text" component={Link} to={"studies"}>
          Studies
        </Button>
        <Button style={checkStyle("/work")} variant="text" component={Link} to={"work"}>
          Work
        </Button>
        <Button style={checkStyle("/contact")} variant="text" component={Link} to={"contact"}>
          Contact
        </Button>
        <select
          className="idioma form-select form-select-sm ms-auto me-3"
          aria-label="Default select example"
          defaultValue={"es"}
          onClick={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="es">🇪🇸</option>
          <option value="en">🇬🇧</option>
        </select>
      </nav>
    </div>
  );
}

export default Header;
