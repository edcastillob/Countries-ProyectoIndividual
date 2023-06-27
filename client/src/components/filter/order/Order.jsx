import { Country } from '../../country/Country';
import { orderAscDes } from "../../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"

export const Order = () => { 
const dispatch = useDispatch();
const countryOrder = useSelector((state)=> state.countries);

 const handleChange=(event) => { 
    event.preventDefault();     

            console.log(event.target.value)
             dispatch(orderAscDes((event.target.value)));
 }
 console.log(countryOrder)

  return (
    <>
    <select name='order' id='order' onChange = { handleChange }>
    <option value="">Ordenar</option>
    <option value="Asc">Ascendente</option>
    <option value="Des">Descendente</option>       
  </select>

  {        
        countryOrder?.map( country => (
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
