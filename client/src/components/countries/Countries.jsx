import { Country } from '../country/Country';
import { useSelector, useDispatch } from "react-redux";
import { showCountries, orderAscDes, orderAscDesRegion ,orderByRegion, orderPopulation, showActivities } from "../../redux/actions/actions";
import { useEffect } from 'react';
// import { Region } from '../filter/region/Region';
import { Order } from '../filter/order/Order';
// import { Population } from '../filter/population/population';
import { SearchBar } from "../searchBar/SearchBar"
import { useState } from 'react';

 

export const Countries = () => {
  const dispatch = useDispatch();     
  
  const countriesState = useSelector((state)=> state.countries);
  // console.log(countriesState)
  // const countryOrder = useSelector((state)=> state.countryOrder);
   const countryRegion = useSelector((state)=> state.countryRegion);
   const countryPopulation = useSelector((state)=> state.countryPopulation);
   const activities = useSelector((state)=> state.activities);
  const [optionCountry, setOptionCountry] = useState([])
  
  useEffect(() =>{
    dispatch(showCountries());
    dispatch(showActivities());
  },[])
  
  useEffect(() =>{ 
   
    if(countryRegion.length !== 0){
      setOptionCountry(countryRegion)
    }else if (countryPopulation.length !== 0){
      setOptionCountry(countryPopulation)    
    
    }else{setOptionCountry(countriesState)}
    
   
  },[countriesState, countryRegion, countryPopulation])
    

  

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

   const handleShowActivities = (event) => { 
      event.preventDefault();
      
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
      <select name='activities'  id='activities' onChange = { handleShowActivities }>
      <option value="" >Actividades T</option>
            { activities.sort()?.map( activities => (
                <option key = {activities.id} value = {activities.id}>{activities.name}</option>
            )) }
          </select>

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