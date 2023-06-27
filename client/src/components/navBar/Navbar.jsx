import { NavLink } from "react-router-dom"
import { SearchBar } from "../searchBar/SearchBar"

export const Navbar = () => {
  return (
    <div>
        <NavLink to='/'><button>Inicio</button></NavLink>
        <NavLink to='/countries'><button>Countries</button></NavLink>
        <NavLink to='/activities'><button>Activity</button></NavLink>
        <SearchBar />
    </div>
  )
}
