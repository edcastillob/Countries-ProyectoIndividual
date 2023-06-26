
import { orderByRegion } from "../../../redux/actions/actions"
import { useDispatch } from "react-redux"

export const Region = () => { 
const dispatch = useDispatch();

 const handleChange=(event) => { 
    event.preventDefault();     

            console.log(event.target.value)
             dispatch(orderByRegion((event.target.value)));
 }


  return (
    <select name='region' id='region' onChange = { handleChange }>
    <option value="All">All</option>
    <option value="Africa">Africa</option>
    <option value="Antarctica">Antarctica</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="North America">North America</option>
    <option value="Oceania">Oceania</option>
    <option value="South America">South America</option>
  </select>
  )
}
