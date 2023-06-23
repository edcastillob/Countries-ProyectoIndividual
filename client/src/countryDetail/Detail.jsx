import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchCountryID } from "../redux/actions/actions";
import { useEffect } from 'react';



export const Detail = () => {
    const { id } =useParams();
    const dispatch = useDispatch();
    const countriesState = useSelector((state)=> state. countryDetail);
    
    useEffect(() => {
      dispatch(searchCountryID(id));
      
    }, [id])
   
  return (
  <div>
    {        
     countriesState?.map( country => {
       return (
        <div key={country.id}>         
         <h2>{country.id}</h2>
         <h2>{country.name}</h2>    
         <img src={country.flags} alt={country.name} /> 
         <h2>{country.nameOfficial}</h2>       
         <h2>{country.capital}</h2>
         <h2>{country.region}</h2>
         <h2>{country.subregion}</h2>
         <h2>{country.area}</h2>
         <h2>{country.population}</h2>                
         <NavLink title='Google Maps' to={country.maps} target="_blank">🗺️</NavLink> 
        </div>
       )
       
     
       })
    } 
 </div>
    
  )
}
