import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  showActivities,
  showCountries,
  getActivitiesCountryAll,
  deleteActivity,
} from "../../redux/actions/actions";
import { ActivitiesNotFound } from "./ActivitiesNotFound";
import style from "../moduleCss/Activities.module.css";

export const Activities = () => {
  const dispatch = useDispatch();
  const countryActivity = useSelector((state) => state.countryActivity);
  const [postDelete, setPostDelete] = useState(false);

  useEffect(() => {
    dispatch(showCountries());
    dispatch(showActivities());
    dispatch(getActivitiesCountryAll());
  }, [postDelete]);

  const handleDeleteActivity = (event) => {
    event.preventDefault();
    const confirmDelete = confirm(
      "¿Estás seguro de que deseas eliminar la actividad?"
    );
    if (confirmDelete) dispatch(deleteActivity(event.target.value));
    if (postDelete === false) {
      setPostDelete(true);
    } else {
      setPostDelete(false);
    }
  };

  return (
    <div className={style.container}>
      {countryActivity?.allActivities?.length > 0 ? (
        <div>
          {countryActivity?.allActivities?.map((activity) => (
            <div key={activity.id} className={style.activity}>
              <table className={style.table}>
                <tbody>
                <tr>
                    <td colSpan="3" className={style.buttonCell}>
                      <div className={style.but}>
                        <button
                        title="Eliminar Actividad"
                        className={style.button}
                        onClick={handleDeleteActivity}
                        value={activity.id}
                      >
                        ❌
                      </button>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Actividad</th>
                    <td>{activity.name}</td>
                  </tr>
                  <tr>
                    <th>{activity.Countries.length > 1 ? "Paises" : "Pais"}</th>
                    <td colSpan="2">
                      {activity.Countries?.map((country) => (
                        <p key={country.id}>{country.name}</p>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <th>Dificultad</th>
                    <td colSpan="2">{activity.difficulty}</td>
                  </tr>
                  <tr>
                    <th>Duración</th>
                    <td colSpan="2">{activity.duration} Horas</td>
                  </tr>
                  <tr>
                    <th>Temporada</th>
                    <td colSpan="2">{activity.season}</td>
                  </tr>                  
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ) : (
        <ActivitiesNotFound />
      )}
    </div>
  );
};
