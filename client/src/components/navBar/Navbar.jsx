import { NavLink } from "react-router-dom"
import style from '../moduleCss/NavBar.module.css';
import { SearchBar } from "../searchBar/SearchBar";



export const Navbar = () => {
  return (
    <div className={style.navbar}>
        <NavLink to='/'><button>Inicio</button></NavLink>
        <SearchBar />
        <NavLink to='/home'><button>Paises</button></NavLink>
        <NavLink to='/activities'><button>Agregar Actividades</button></NavLink>
        <NavLink to='/activity'><button>Mostrar Actividades</button></NavLink>

      
    </div>
  )
}
