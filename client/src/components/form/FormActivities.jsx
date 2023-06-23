import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { showCountries } from "../../redux/actions/actions";


export const FormActivities = () => {
    const dispatch = useDispatch();
    const countriesState = useSelector((state)=> state.countries);
        
    useEffect(() => {dispatch(showCountries())}, [])

    countriesState.sort((x,y) => x.name.localeCompare(y.name));
       
console.log(countriesState)
  return (
    <form>

        <label htmlFor='name'>Actividad:</label>
        <input 
        type='text' 
        name='actividad'
        // value=''
        // onChange=''
        />

        <select >
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
        name='duracion'
        // value=''
        // onChange=''
        />

        <select>
          <option value=''>- Temporada -</option>
          <option value='Invierno'>Invierno</option>
          <option value='Otoño'>Otoño</option>
          <option value='Primavera'>Primavera</option>
          <option value='Verano'>Verano</option>
        </select> 

                
      <div>
        <div>
          <select name='pais' id="">
            {
              countriesState.sort()?.map( country => (
                <option key = {country.id} value = {country.id}>{country.name}</option>
              ))
            }
          </select>
        </div>
      </div>

       
     
    

    </form>
  )
}
