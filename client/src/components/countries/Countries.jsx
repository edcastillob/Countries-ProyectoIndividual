import { Country } from '../country/Country';
import { useSelector, useDispatch } from "react-redux";
import { showCountries } from "../../redux/actions/actions";
import { useEffect } from 'react';

export const Countries = () => {
    const dispatch = useDispatch();
    const countriesState = useSelector((state)=> state.countries);
    
    useEffect(() => {
      dispatch(showCountries());
      
    }, [])

    // console.log('Desde effect', countriesState)
  return (
    <div>
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
