import { useSelector, useDispatch } from "react-redux";
import { showActivities, showCountries, getActivitiesCountryAll } from "../../redux/actions/actions";
import { Activity } from "../Activity/Activity";
import { useEffect } from "react";

export const Activities = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showCountries());
        dispatch(showActivities());
        dispatch(getActivitiesCountryAll());

    }, []);
    
    // const showActivitiesCountry = useSelector((state) => state.showActivitiesCountry);
  //   const countriesState = useSelector((state) => state.countries);
  // const activities = useSelector((state) => state.activities);
  const countryActivity = useSelector((state) => state.countryActivity);

  // console.log('A: ',activities)
  // console.log('A: ',activities.name)
  console.log('C A: ', countryActivity)
  return (
    <div>
      
        {/* {  countryActivity.allActivities?.map((activity) => (
  <Activity
    key={activity.id}
    name={activity.name}
    difficulty={activity.difficulty}
    duration={activity.duration}
    season={activity.season}
    countries={activity.Countries.map((country) => (
      <h4 key={country.id}>{country.name}</h4>
    ))}
  />
))} */}

   {
  countryActivity?.allActivities?.map((activity) => (
    <div key={activity.id}>
      <h4>Actividad: {activity.name}</h4>
      <div>
      {activity.Countries.length > 1 ?  <h4>Paises:</h4> : <h4>Pais:</h4>}
        {activity.Countries?.map((country) => (
          <p key={country.id}>{country.name}</p>
        ))}
      </div>
      <p>Dificultad: {activity.difficulty}</p>
      <p>Duración: {activity.duration} Horas</p>
      <p>Temporada: {activity.season}</p>
    </div>
  ))
}       
    </div>
  );
};
