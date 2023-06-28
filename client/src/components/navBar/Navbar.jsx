import { NavLink } from "react-router-dom"
import { SearchBar } from "../searchBar/SearchBar"


export const Navbar = () => {
  return (
    <div>
        <NavLink to='/'><button>Inicio</button></NavLink>
        <NavLink to='/activities'><button>Activity</button></NavLink>
        <NavLink to='/home'><button>home</button></NavLink>

         {/* <SearchBar /> */}
    </div>
  )
}
