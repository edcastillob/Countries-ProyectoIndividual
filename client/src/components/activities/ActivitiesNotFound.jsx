import globo from '../../assets/globoCountries.gif';
import error from '../../assets/Error.svg.png';
import style from '../moduleCss/ActivitiesNotFound.module.css';

export const ActivitiesNotFound = () => {
  return (
    <div className={ style.container }>
        
        <div><img className={style.error} src={error} alt='error' /></div>
        <h1>Hasta ahora no se ha registrado alguna actividad turística</h1>
        <div><img src={globo} alt='Actividades T' /></div>
        
    </div>
  )
}
