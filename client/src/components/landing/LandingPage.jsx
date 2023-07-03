import { NavLink } from "react-router-dom";
import style from "../moduleCss/LandingPage.module.css";
import globe from '../../assets/globoCountries.gif';

export const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.ladoIzq}>
        <h2 className={style.bienvenidos}>Bienvenidos a Countries</h2>
        <p className={style.subtitulo}>Explora los paises del Mundo y planifica tus actividades turísticas</p>
        <p className={style.subtitulo}>Proyecto Individual- Henry</p>
        <NavLink to="/home">
          <button className={style.button}>Acceder</button>
        </NavLink>
      </div>
      <div className={style.ladoDer}>
        <img src={globe} alt="Countries Globe" className={style.image} />
      </div>
    </div>
  );
};
