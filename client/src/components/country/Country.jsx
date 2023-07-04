import { NavLink } from 'react-router-dom';
import style from '../moduleCss/Country.module.css';




export const Country = ({ id, name, flags, region }) => {
  return (
    <div className={style.countryCard} key={id}>
      <div className={style.countryFlag}>
        <NavLink title="Detail Country" to={`/detail/${id}`}>
          <img src={flags} alt={name} />
        </NavLink>
      </div>
      <div className={style.countryDetails}>
        <h2>{name}</h2>
        <h3>{region}</h3>
      </div>
    </div>
  );
};