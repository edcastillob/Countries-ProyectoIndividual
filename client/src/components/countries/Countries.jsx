import { Country } from '../country/Country';
import { useSelector, useDispatch } from "react-redux";
import { showCountries } from "../../redux/actions/actions";
import { useEffect } from 'react';
import { Region } from '../filter/region/Region';
import { Order } from '../filter/order/Order';
import { Population } from '../filter/population/population';

export const Countries = () => {
    const dispatch = useDispatch();
    const countriesState = useSelector((state)=> state.countries);
    
    useEffect(() => {
      dispatch(showCountries());      
    }, [])
 
  return (
    <div>
      <Region />
      <Order />
      <Population />
       {        
        countriesState?.map( country => (
          <Country
            key = { country.id }
            id={country.id}
            name = {country.name}
            flags = {country.flags}
            region = {country.region}
            />
        ))
       } 
    </div>
  )
}