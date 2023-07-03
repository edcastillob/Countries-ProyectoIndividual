import { useSelector, useDispatch } from "react-redux";
import { showActivities, showCountries, getActivitiesCountryAll, deleteActivity } from "../../redux/actions/actions";
// import { Activity } from "../Activity/Activity";
import { useEffect, useState } from "react";
import style from '../moduleCss/Activities.module.css';
import { ActivitiesNotFound } from "./ActivitiesNotFound";


export const Activities = () => {
  
    const dispatch = useDispatch();
    const countryActivity = useSelector((state) => state.countryActivity);
    const [postDelete, setPostDelete] = useState(false)
    
    useEffect(() => {
        dispatch(showCountries());
        dispatch(showActivities());
        dispatch(getActivitiesCountryAll());

    }, [postDelete]);
    

  
   const handleDeleteActivity = (event) => {  
    event.preventDefault();    
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar la actividad?');
    if(confirmDelete) dispatch(deleteActivity(event.target.value));
    if(postDelete === false){
      setPostDelete(true)
    }else{
      setPostDelete(false)
    }
  }




return (
  <div className={style.container}>
    { (countryActivity?.allActivities?.length >0) ?  
    
    <div>
    {countryActivity?.allActivities?.map((activity) => (
      <div key={activity.id}>
        <button className={style.button} onClick={handleDeleteActivity} value={activity.id}>--❌--</button>
        <table className={style.table}>
          <tbody>
            <tr>
              <th>Actividad</th>
              <td>{activity.name}</td>
            </tr>
            <tr>
              <th>{activity.Countries.length > 1 ? 'Paises' : 'Pais'}</th>
              <td>
                {activity.Countries?.map((country) => (
                  <p key={country.id}>{country.name}</p>
                ))}
              </td>
            </tr>
            <tr>
              <th>Dificultad</th>
              <td>{activity.difficulty}</td>
            </tr>
            <tr>
              <th>Duración</th>
              <td>{activity.duration} Horas</td>
            </tr>
            <tr>
              <th>Temporada</th>
              <td>{activity.season}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ))}
    
  </div>: <ActivitiesNotFound /> }
  </div>
);


};
