import { Country } from '../../country/Country';
import { orderByRegion} from "../../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { OrderRegion } from '../orderRegion/OrderRegion';

export const Region = () => { 
const dispatch = useDispatch();
const countryRegion = useSelector((state)=> state.countryRegion);

 const handleChange=(event) => { 
    event.preventDefault();     

            console.log(event.target.value)
             dispatch(orderByRegion((event.target.value)));
 }


  return (

    <>
    {(countryRegion.length !== 0 ? <OrderRegion /> : null)
}    
    <select name='region' id='region' onChange = { handleChange }>
    <option value="">Continente</option>
    <option value="All">Todos</option>
    <option value="Africa">Africa</option>
    <option value="Americas">America</option>
    <option value="Antarctic">Antarctica</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europa</option>
    <option value="Oceania">Oceania</option>    
  </select>

  {        
        countryRegion?.map( country => (
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
