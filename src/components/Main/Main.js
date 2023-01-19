import { useTranslation } from "react-i18next";
import "./Main.css";
function Main() {
  const { t } = useTranslation();
  return (
    <div className="main">
      <div className="container animate__animated animate__fadeIn">
        <h1>{t("intro.titulo")}</h1>
        <p>{t("intro.texto")}</p>
        <p>{t("intro.texto2")}</p>
      </div>
    </div>
  );
}

export default Main;
