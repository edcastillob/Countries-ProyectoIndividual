import { Country } from '../../country/Country';
import {  orderPopulation } from "../../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"

export const Population = () => { 
const dispatch = useDispatch();
const countryPopulation = useSelector((state)=> state.countryPopulation);

 const handleChange=(event) => { 
    event.preventDefault();     

            console.log(event.target.value)
             dispatch(orderPopulation((event.target.value)));
 }


  return (
    <>
    <select name='population' id='population' onChange = { handleChange }>
    <option value="">Poblacion</option>
    <option value="bigPopulation">Mayor Población</option>
    <option value="smallPopulation">Menor Población</option>       
  </select>

  {        
        countryPopulation?.map( country => (
          <Country
            key = { country.id }
            id={country.id}
            name = {country.name}
            flags = {country.flags}
            region = {country.region}
            />
        ))
       }  
    </>
  )
}
