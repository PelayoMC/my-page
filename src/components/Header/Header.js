import i18n from "i18next";
import "./Header.css";
import ButtonHeader from "./ButtonHeader/ButtonHeader";

function Header() {
  return (
    <div className="container header">
      <nav className="header-content">
        <ButtonHeader url="" text="Intro"></ButtonHeader>
        <ButtonHeader url="studies" text="Studies"></ButtonHeader>
        <ButtonHeader url="work" text="Work"></ButtonHeader>
        <ButtonHeader url="contact" text="Contact"></ButtonHeader>
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
