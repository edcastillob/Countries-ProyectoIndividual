import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { showCountries, postActivityData } from "../../redux/actions/actions";


export const FormActivities = () => {
    const dispatch = useDispatch();
    const countriesState = useSelector((state)=> state.countries);        
    useEffect(() => {dispatch(showCountries())}, [])
    countriesState.sort((x,y) => x.name.localeCompare(y.name));
    
    
    const [activityData, setActivityData] = useState({
      name: '',
      difficulty: '', 
      duration: '', 
      season: '', 
      countries:[],
    })
    
    const [countrySelect, setCountrySelect] = useState([]);
    const [nameCountry, setNameCountry] = useState([]);

    const handleChange = (event) => { 
      event.preventDefault();  
        setActivityData({
          ...activityData,
          [event.target.name]: event.target.value
        })
     }

     const handleSubmit = (event) => { 
        event.preventDefault();     
      
            console.log(activityData)
            dispatch(postActivityData((activityData)));
            // alert('Actividad creada exitosamente');
            setActivityData({
              name: '',
                  difficulty: '',
                  duration: '',
                  season: '',
                  countries: []
              });}

    const handleCountrySelect = (event) => setCountrySelect([...countrySelect, event.target.value]);
    useEffect(() => { setActivityData({
        ...activityData,
        countries: countrySelect,
      });
    }, [countrySelect]);
    
    
    useEffect(() => { 
      countrySelect.map((country) => {
        let result = countriesState.find(element =>  element.id === country
     
          );

      setNameCountry([...nameCountry, result.name])
  })    
  }, [countrySelect]);
    
    
 
   
  

   
     
  return (
    <form onSubmit = { handleSubmit }>

        <label htmlFor='name'>Actividad:</label>
        <input 
        type='text' 
        name='name'
        value = { activityData.name }
        onChange = { handleChange }
        />

        <select name='difficulty' id="difficulty" onChange = { handleChange }>
          <option value=''>- Dificultad -</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        <label htmlFor='duracion'>Duracion:</label>
        <input 
        type='number' 
        name='duration'
        value = { activityData.duration }
        onChange = { handleChange }
        />

        <select name='season' id='season' onChange = { handleChange }>
          <option value=''>- Temporada -</option>
          <option value='Invierno'>Invierno</option>
          <option value='Otoño'>Otoño</option>
          <option value='Primavera'>Primavera</option>
          <option value='Verano'>Verano</option>
        </select> 
      <div>
     
        <div>
          <select name='countries'  id='countries' onChange = { handleCountrySelect }>
            {
              countriesState.sort()?.map( country => (
                <option key = {country.id} value = {country.id}>{country.name}</option>
              ))
            }
          </select>
        </div>
      </div> 
      <button type='submit'>Cargar Actividad</button> 
    
      <div>{nameCountry?.map(country => <li key = {country}>{country}</li>)}</div>
    </form>
  )
}