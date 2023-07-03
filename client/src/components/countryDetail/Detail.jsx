import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchCountryID } from "../../redux/actions/actions";
import { useEffect } from 'react';
import style from '../moduleCss/Detail.module.css';
import mapsG from '../../assets/google-maps.png';

export const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(searchCountryID(id));
  }, [id]);

  return (
    <div className={style.cardContainer}>
      {countriesState?.map((country) => (
        <div className={style.card} key={country.id}> 
           <NavLink to='/home'>🢀 </NavLink>       
          <h3>{country.nameOfficial}</h3>
          <img src={country.flags} alt={country.name} />
          <h2>{country.name}</h2>
          <h2>Capital: {country.capital}</h2>
          <h2>Continente: {country.region}</h2>
          <h2>Sub-Región: {country.subregion}</h2>
          <h2>Área Territorial: {country.area}</h2>
          <h2>Población: {country.population}</h2>
          <NavLink title='Google Maps' to={country.maps} target="_blank">
            <img className={style.maps} src={mapsG} alt="Google Maps" />
          </NavLink>
        </div>
      ))}
    </div>
  );
};
