import { useState } from "react";
import { searchCountryName } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import style from "../moduleCss/searchBar.module.css";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;  
    setName(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(searchCountryName(name));
    setName("");
  };
  return (
    <div className={style.searchBar}>
      <input
        className={style.searchInput}
        type="search"
        placeholder=" Busqueda de paises "
        name="name"
        value={name}
        onChange={handleChange}
      />

      <button
        className={style.searchButton}
        type="submit"
        onClick={handleClick}
      >
        Buscar
      </button>
    </div>
  );
};
