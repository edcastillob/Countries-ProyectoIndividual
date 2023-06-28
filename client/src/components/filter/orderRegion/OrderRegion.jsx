import { Country } from '../../country/Country';
import { orderRegion } from "../../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"

export const OrderRegion = () => { 
const dispatch = useDispatch();
const countryRegion = useSelector((state)=> state.countryRegion);

 const handleChange=(event) => { 
    event.preventDefault();     

            console.log(event.target.value)
             dispatch(orderRegion((event.target.value)));
 }


  return (
    <>
    <select name='oRegion' id='oRegion' onChange = { handleChange }>
    <option value="">Ordenar-</option>
    <option value="Asc">Ascendente</option>
    <option value="Des">Descendente</option>       
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
