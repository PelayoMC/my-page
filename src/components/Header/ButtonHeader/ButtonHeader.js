import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ButtonHeader.css";

function ButtonHeader(props) {
  let { url, text } = props
  const location = useLocation();

  const style = {
    backgroundColor: "transparent",
    borderBottom: "2px solid var(--color-text)",
    opacity: 1,
  };

  const checkStyle = (url) => (location.pathname === url ? style : {});

  return (
    <Button style={checkStyle("/" + url)} variant="text" component={Link} to={url}>
          { text}
    </Button>
  );
}

export default ButtonHeader;
