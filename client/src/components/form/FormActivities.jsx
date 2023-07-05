import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { showCountries, postActivityData } from "../../redux/actions/actions";
import { Validations } from "../validation/Validations";
import style from "../moduleCss/FormActivities.module.css";

export const FormActivities = () => {
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);
  const activitiesForm = useSelector((state) => state.activitiesForm);
  
  useEffect(() => {dispatch(showCountries())}, []);
  countriesState.sort((x, y) => x.name.localeCompare(y.name));

  const [activityData, setActivityData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [countrySelect, setCountrySelect] = useState([]);
  const [nameCountry, setNameCountry] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setActivityData({
      ...activityData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      Validations({
        ...errors,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleCountrySelect = (event) =>
    setCountrySelect([...countrySelect, event.target.value]);

  useEffect(() => {
    setActivityData({
      ...activityData,
      countries: countrySelect,
    });
  }, [countrySelect]);

  useEffect(() => {
    countrySelect?.map((country) => {
      let result = countriesState.find((element) => element.id === country);

      setNameCountry([...nameCountry, result.name]);
    });
  }, [countrySelect]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormComplete()) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
    dispatch(postActivityData(activityData));
    alert("Actividad creada exitosamente");
    setActivityData({
      name: "",
      difficulty: "- Dificultad -",
      duration: "",
      season: "",
      countries: [],
    }),
      setCountrySelect([...activitiesForm]);
    setNameCountry([...activitiesForm]);
  };

  const isFormComplete = () => {
    const { name, difficulty, duration, season, countries } = activityData;
    return (
      name !== "" &&
      difficulty !== "" &&
      duration !== "" &&
      season !== "" &&
      countries.length > 0
    );
  };
 
  
  
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Actividad:</label>
      <input
        className={style.input}
        type="text"
        name="name"
        placeholder="-- Inserte actividad --"
        value={activityData.name}
        onChange={handleChange}
      />

      <label htmlFor="duracion">Duracion:</label>
      <input
        className={style.input}
        type="number"
        name="duration"
        placeholder="-- Horas--"
        value={activityData.duration}
        onChange={handleChange}
      />
      <p className={style.error}>{errors.duration ? errors.duration : null}</p>
      <p className={style.error}>{errors.name ? errors.name : null}</p>
      <label htmlFor="name">Dificultad:</label>
      <select
        className={style.select}
        name="difficulty"
        id="difficulty"
        onChange={handleChange}
        value={activityData.difficulty}
      >
        <option value="x">- --- -</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p className={style.error}>
        {errors.difficulty ? errors.difficulty : null}
      </p>

      <label>Temporada:</label>
      <select
        className={style.select}
        name="season"
        id="season"
        onChange={handleChange}
        value={activityData.season}
      >
        <option value="x">- --- -</option>
        <option value="Invierno">Invierno</option>
        <option value="Otoño">Otoño</option>
        <option value="Primavera">Primavera</option>
        <option value="Verano">Verano</option>
      </select>
      <div>
        <p className={style.error}>{errors.season ? errors.season : null}</p>

        <div>
          <label htmlFor="">Seleccione el Pais:</label>
          <select
            className={style.select}
            name="countries"
            id="countries"
            onChange={handleCountrySelect}
            value=""
          >
            <option value="x">- --- - </option>
            {countriesState?.sort().map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <p className={style.error}>
            {errors.countries ? errors.countries : null}
          </p>

          <div className={style.countriesSelect}>
            {nameCountry?.map((country) => (
              <ul key={country}>{country}</ul>
            ))}
          </div>
        </div>
      </div>
      <button
        className={style.button}
        type="submit"
        // disabled={!isFormComplete()}
      >
        Cargar Actividad
      </button>
    </form>
  );
};
