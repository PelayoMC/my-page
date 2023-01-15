import i18n from "i18next";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import MailIcon from '@mui/icons-material/Mail';

function Bottom() {
  const style = {
    border: 'black 1px solid'
  };

  return (
    <div className="container bottom">
      <nav className="bottom-content justify-content-around">
        {/* <Button style={checkStyle("/" + url)} variant="text" component={Link} to={url}>
            { text}
              </Button> */}
        <IconButton style={style} aria-label="home" variant="outlined" component={Link} to={""}>
            <HomeIcon />
        </IconButton>
        <IconButton style={style} aria-label="work" component={Link} to={"work"}>
            <WorkIcon />
        </IconButton>
        <IconButton style={style} aria-label="studies" component={Link} to={"studies"}>
            <SchoolIcon />
        </IconButton>
        <IconButton style={style} aria-label="contact" component={Link} to={"contact"}>
            <MailIcon />
        </IconButton>
        <select
          className="idioma form-select form-select-sm"
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

export default Bottom;