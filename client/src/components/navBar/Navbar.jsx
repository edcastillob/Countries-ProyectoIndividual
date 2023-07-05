import { NavLink, useLocation } from "react-router-dom";
import style from "../moduleCss/NavBar.module.css";

export const Navbar = () => {
  const location = useLocation();
  const destination = location.pathname === "/home" ? "/countries" : "/home";

  return (
    <div className={style.navbar}>
      <NavLink to="/">
        <button>Inicio</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>

      <NavLink to={destination}>
        <button>Paises</button>
      </NavLink>
      <NavLink to="/activities">
        <button>Agregar Actividades</button>
      </NavLink>
      <NavLink to="/activity">
        <button>Mostrar Actividades</button>
      </NavLink>
    </div>
  );
};
