import { Country } from '../country/Country';
import { useSelector, useDispatch } from "react-redux";
import { showCountries, orderAscDes, orderAscDesRegion ,orderByRegion, orderPopulation, showActivities, getActivitiesCountry } from "../../redux/actions/actions";
import { useEffect } from 'react';
// import { Region } from '../filter/region/Region';
import { Order } from '../filter/order/Order';
// import { Population } from '../filter/population/population';
import { SearchBar } from "../searchBar/SearchBar"
import { useState } from 'react';
import { Activity } from '../Activity/Activity';

 

export const Countries = () => {
  const dispatch = useDispatch();     
  
  const countriesState = useSelector((state)=> state.countries);
  // console.log(countriesState)
  // const countryOrder = useSelector((state)=> state.countryOrder);
   const countryRegion = useSelector((state)=> state.countryRegion);
   const countryPopulation = useSelector((state)=> state.countryPopulation);
   const activities = useSelector((state)=> state.activities);
   const activitiesCountry = useSelector((state)=> state.activitiesCountry);
   const showActivitiesCountry = useSelector((state)=> state.showActivitiesCountry);
  const [optionCountry, setOptionCountry] = useState([])
  
  useEffect(() =>{
    dispatch(showCountries());
    dispatch(showActivities());
    // dispatch(getActivitiesCountry());
  },[])
  
  useEffect(() =>{ 
   console.log(showActivitiesCountry)
    if(countryRegion.length !== 0){
      setOptionCountry(countryRegion)
    }else if (countryPopulation.length !== 0){
      setOptionCountry(countryPopulation) 
    }else if(showActivitiesCountry === true){
            setOptionCountry([])     
    
    }else{setOptionCountry(countriesState)}
    
   
  },[countriesState, countryRegion, countryPopulation, showActivitiesCountry])
    

  

    const handleOrderAscDes=(event) => { 
      event.preventDefault(); 
      
      if(optionCountry.length > 245){
        
        dispatch(orderAscDes((event.target.value)));
      }else{
        dispatch(orderAscDesRegion((event.target.value)));
      }

     
      
    }

   const handleOrderRegion=(event) => { 
      
      event.preventDefault();
     
         
      dispatch(orderByRegion((event.target.value)));    
         
      
    }

    const handleOrderPopulation=(event) => { 
      event.preventDefault();     
  
        
               dispatch(orderPopulation((event.target.value)));
   }

   const handleActivitiesCountry = (event) => { 
      event.preventDefault();
      console.log(event.target.value)
   console.log(showActivitiesCountry)

      dispatch(getActivitiesCountry((event.target.value))); 
      console.log('Esto es activity country:  ', activitiesCountry)   
   }

  return (
    <div>
      
      {/* <Region /> */}
     {/* <Order />   */}
      {/* <Population /> */}
        <SearchBar/>
      {/* Ordenar ascendente y descendente */}
      <select name='order' id='order' onChange={handleOrderAscDes}>
        <option value="">Ordenar</option>
        <option value="Asc">Ascendente</option>
        <option value="Des">Descendente</option>       
      </select>

      {/* Ordenar por region */}
      <select name='region' id='region' onChange = { handleOrderRegion }>
        <option value="">Continente</option>
        <option value="All">Todos</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Antarctic">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>    
      </select>
      {/* Ordenar por poblacion */}
      <select name='population' id='population' onChange = { handleOrderPopulation }>
        <option value="">Poblacion</option>
        <option value="bigPopulation">Mayor Población</option>
        <option value="smallPopulation">Menor Población</option>       
      </select>

      {/* actividades turisticas */}
      <select name='activities'  id='activities' onChange = { handleActivitiesCountry }>
      <option value="" >Actividades T</option>
            { activities.sort()?.map( activities => (
                <option key = {activities.id} value = {activities.id}>{activities.name}</option>
            )) }
      </select>
     
           { 
           activitiesCountry?.map( activTurist => 
           <Activity 
            key= {activTurist.activity.id}
            name = {activTurist.activity.name}            
            countryID = {activTurist.searchActivityCountry.map(country => (country.CountryId))}
           /> 
           )}

           {/* { activitiesCountry?.map( country =>  
              <div key={country.activity.id}>
                {country.activity.name}            
                {country.searchActivityCountry.map(e => (e.CountryId))}
              </div>
           )}     */}         

          {        
          optionCountry?.map( country => (
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