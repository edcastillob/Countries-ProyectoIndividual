import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { showCountries, postActivityData } from "../../redux/actions/actions";
import { Validations } from "../validation/Validations";


export const FormActivities = () => {
    const dispatch = useDispatch();
    const countriesState = useSelector((state)=> state.countries);   
    const activitiesForm = useSelector((state)=> state.activitiesForm);   
    useEffect(() => {dispatch(showCountries())}, [])
    countriesState.sort((x,y) => x.name.localeCompare(y.name));
    
    
    const [activityData, setActivityData] = useState({
      name: '',
      difficulty: '', 
      duration: '', 
      season: '', 
      countries:[],
    });

    const [errors, setErrors] = useState({
      name: '',
      difficulty: '', 
      duration: '', 
      season: '', 
      countries:[],
    });

       
    
    
    const [countrySelect, setCountrySelect] = useState([]);
    const [nameCountry, setNameCountry] = useState([]);

    const handleChange = (event) => { 
      event.preventDefault();  
        setActivityData({
          ...activityData,
          [event.target.name]: event.target.value
        })

        setErrors(
          Validations({
            ...errors,
            [event.target.name]: event.target.value
          })
          )
     }

     
    

    const handleCountrySelect = (event) => setCountrySelect([...countrySelect, event.target.value]);
    
    useEffect(() => { setActivityData({
        ...activityData,
        countries: countrySelect,
      });
    }, [countrySelect]);
    
    
    useEffect(() => { 

        countrySelect?.map((country) => {
          let result = countriesState.find(element =>  element.id === country);
  
        
        setNameCountry([...nameCountry, result.name])
  })    
  }, [countrySelect]);
    
    
 
   
  

  const handleSubmit = (event) => { 
 
    event.preventDefault();    


    
  
        dispatch(postActivityData((activityData)));
        alert('Actividad creada exitosamente');
        setActivityData({
              name: '',
              difficulty: '- Dificultad -',
              duration: '',
              season: '',
              countries: []}),
              console.log(activityData)
              
          setCountrySelect([...activitiesForm])
          setNameCountry([...activitiesForm])
         }
         
  return (
    <form onSubmit = { handleSubmit }>

        <label htmlFor='name'>Actividad:</label>
        <input 
        type='text' 
        name='name'
        placeholder='-- Inserte actividad --'
        value = { activityData.name }
        onChange = { handleChange }
        />
        <p>{ errors.name ? errors.name : null }</p>
        <select name='difficulty' id="difficulty" onChange = { handleChange } value={activityData.difficulty}>
          <option value='x'>- Dificultad -</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <p>{ errors.difficulty ? errors.difficulty : null }</p>

        <label htmlFor='duracion'>Duracion:</label>
        <input 
        type='number'         
        name='duration'
        placeholder='-- Horas--'
        value = { activityData.duration }
        onChange = { handleChange }
        />
        <p>{ errors.duration ? errors.duration : null }</p>

        <select name='season' id='season' onChange = { handleChange } value={activityData.season}>
          <option value='x'>- Temporada -</option>
          <option value='Invierno'>Invierno</option>
          <option value='Otoño'>Otoño</option>
          <option value='Primavera'>Primavera</option>
          <option value='Verano'>Verano</option>
        </select> 
      <div>
     <p>{ errors.season ? errors.season : null }</p>

        <div>
          <select name='countries'  id='countries' onChange = { handleCountrySelect } value=' - Pais - '>
          <option value='x' >- Pais - </option>
            {
              countriesState?.sort().map( country => (
                <option key = {country.id} value = {country.id}>{country.name}</option>
              ))
            }
          </select>
        <p>{ errors.countries ? errors.countries : null }</p>

          <div>{nameCountry?.map(country => <li key = {country}>{country}</li>)}</div>
        </div>
      </div> 
      <button type='submit'>Cargar Actividad</button> 
    
    </form>
  )
}
