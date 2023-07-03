import { Country } from '../country/Country';
import { useSelector, useDispatch } from "react-redux";
import { showCountries, orderAscDes, orderAscDesRegion ,orderByRegion, orderPopulation, showActivities, getActivitiesCountry, pagination, orderAscDesCountriesName} from "../../redux/actions/actions";
import { useEffect } from 'react';
import { useState } from 'react';
import { Activity } from '../Activity/Activity';
import style from '../moduleCss/Countries.module.css';

 

export const Countries = () => {
  const dispatch = useDispatch();     
  
  const countriesState = useSelector((state)=> state.countries);
  const countriesPagination = useSelector((state)=> state.countriesPagination);
  const countriesPopulation = useSelector((state)=> state.countriesPopulation);
  const countriesName = useSelector((state)=> state.countriesName);  
   const countryRegion = useSelector((state)=> state.countryRegion);
   const countryPopulation = useSelector((state)=> state.countryPopulation);
   const activities = useSelector((state)=> state.activities);
   const activitiesCountry = useSelector((state)=> state.activitiesCountry);
   const showActivitiesCountry = useSelector((state)=> state.showActivitiesCountry);
   
   

  const [optionCountry, setOptionCountry] = useState([])

  
  
  useEffect(() =>{
    dispatch(showCountries());
    dispatch(showActivities());
    
  },[])
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  const ITEMS_FOR_PAGE = 10; 
  const [currentPage, setCurrentPage] = useState(0);
  const [itemInitial, setItemInitial] = useState([...countriesState]?.splice(0, ITEMS_FOR_PAGE))
   const [itemPopulation, setItemPopulation] = useState([...countryPopulation]?.splice(0, ITEMS_FOR_PAGE))
   const [itemRegion, setItemRegion] = useState([...countryRegion]?.splice(0, ITEMS_FOR_PAGE))
   const [itemCountriesName, setCountriesName] = useState([...countriesName]?.splice(0, ITEMS_FOR_PAGE))
 
   const handlePagNext = () => {
    // console.log('Countries :', countriesState.length)
    // console.log('Pagintacion :',countriesPagination.length)
    // console.log('Continentes :',countryRegion.length)
    // console.log(' name :',countriesName.length)
    // console.log('Poblacion :',countryPopulation.length)

    const nextPage = currentPage + 1;
    const index = nextPage * ITEMS_FOR_PAGE;
    
    if(countriesState.length){
      if(index >= countriesState.length) return;
      setItemInitial([...countriesState]?.splice(index, ITEMS_FOR_PAGE))
      setCurrentPage(nextPage)     
     }
    if(countryPopulation.length){
      if(index >= countryPopulation.length) return;
      setItemPopulation([...countryPopulation]?.splice(index, ITEMS_FOR_PAGE))
      setCurrentPage(nextPage)     
     }
    
     if(countryRegion.length){
      if(index >= countryRegion.length) return;
      setItemRegion([...countryRegion]?.splice(index, ITEMS_FOR_PAGE))
      setCurrentPage(nextPage)
    }
     if(countriesName.length){
      if(index >= countriesName.length) return;
      setCountriesName([...countriesName]?.splice(index, ITEMS_FOR_PAGE))
      setCurrentPage(nextPage)
    }
    dispatch(pagination('next')) 
  }

    const handlePagPrev = () => {
    
    dispatch(pagination('prev'))

    const prevPage = currentPage - 1;
    const index = prevPage * ITEMS_FOR_PAGE;

    if(prevPage < 0) return;

    if(countriesState.length){
      setItemInitial([...countriesState]?.splice(index, ITEMS_FOR_PAGE))
      setCurrentPage(prevPage)
    } 
    if(countryPopulation.length){
      setItemPopulation([...countryPopulation]?.splice(index, ITEMS_FOR_PAGE))
      setCurrentPage(prevPage)
    } 
    if(countryRegion.length){
      setItemRegion([...countryRegion]?.splice(index, ITEMS_FOR_PAGE))
      setCurrentPage(prevPage)
    }
    if(countriesName.length){
      setCountriesName([...countriesName]?.splice(index, ITEMS_FOR_PAGE))
      setCurrentPage(prevPage)
    }
   };

   useEffect(() => {
      setItemInitial([...countriesState]?.splice(0, ITEMS_FOR_PAGE));
      setItemPopulation([...countryPopulation]?.splice(0, ITEMS_FOR_PAGE));
      setItemRegion([...countryRegion].splice(0, ITEMS_FOR_PAGE));
      setCountriesName([...countriesName].splice(0, ITEMS_FOR_PAGE));
  }, [countryPopulation, countryRegion, countriesState, countriesName])
  //-------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------

 
  
  useEffect(() =>{ 
    // console.log('Countries :', countriesState.length)
    // console.log('Pagintacion :',countriesPagination.length)
    // console.log('Continentes :',countryRegion.length)
    // console.log('Poblacion :',countryPopulation.length)
    // console.log(' name :',countriesName.length)

    if(countryRegion.length === 5 || countryRegion.length > 10 ){
      setOptionCountry(itemRegion)
    }else if (countriesState.length > 10){
      setOptionCountry(itemInitial)
    }else if (countryPopulation.length > 10){
      setOptionCountry(itemPopulation)
    }else if(countriesName.length !== 0){  
      // console.log(countriesName.length)    
      setOptionCountry(itemCountriesName)
    }else if(showActivitiesCountry === true){
            setOptionCountry([])     
    
    }else{setOptionCountry(countriesPagination)}
    
   
  },[countriesState, countryRegion, countryPopulation, showActivitiesCountry, countriesName, countriesPagination, itemPopulation, itemRegion, itemCountriesName])
    

  

    const handleOrderAscDes=(event) => { 
      event.preventDefault(); 
    // console.log('Countries :', countriesState.length)
    // console.log('Pagintacion :',countriesPagination.length)
    // console.log('Poblacion :',countryPopulation.length)
    // console.log(' name :',countriesName.length)
    // console.log('Continentes :',countryRegion.length)
      
      if(countryRegion.length){
        dispatch(orderAscDesRegion((event.target.value)));
      }
      if(countriesName.length){
        dispatch(orderAscDesCountriesName((event.target.value)));
      }
   
           dispatch(orderAscDes((event.target.value)));
      }

   const handleOrderRegion=(event) => {      
      event.preventDefault();

      if(countriesState.length === 0 ) {dispatch(showCountries())}   
      // dispatch(orderAscDesRegion(('Asc')));
      setTimeout(() => {
        dispatch(orderByRegion((event.target.value)))
        setTimeout(() => dispatch(orderAscDesRegion(('Asc'))), "0");
      }, "0");
     


      dispatch(orderAscDesRegion((event.target.value)));
            
    }

    const handleOrderPopulation=(event) => { 
      event.preventDefault();
      // console.log('Countries :', countriesState.length)
      // console.log('Pagintacion :',countriesPagination.length)
      // console.log('Continentes :',countryRegion.length)
      // console.log('Poblacion :',countryPopulation.length)
      dispatch(orderPopulation((event.target.value)));
   }

   const handleActivitiesCountry = (event) => { 
      event.preventDefault();
      dispatch(getActivitiesCountry((event.target.value))); 
   }



  return (
    <div>
      


      <button className={ style.button } onClick={ () => handlePagPrev() }>Anterior</button>
      <button className={ style.button } onClick={ () => handlePagNext() }>Siguiente</button>
  
   
        
      {/* Ordenar ascendente y descendente */}
      <select className={ style.select } name='order' id='order' onChange={handleOrderAscDes}>        
        <option >Ordenar</option>
        <option value="Asc">Ascendente</option>
        <option value="Des">Descendente</option>       
      </select>

      {/* Ordenar por region */}
      <select className={ style.select } name='region' id='region' onChange = { handleOrderRegion }>
        <option value="All">Continentes</option>        
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Antarctic">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>    
      </select>
      {/* Ordenar por poblacion */}
      <select className={ style.select } name='population' id='population' onChange = { handleOrderPopulation }>       
      <option >Población</option>        
        <option value="bigPopulation">Mayor Población</option>
        <option value="smallPopulation">Menor Población</option>       
      </select>

      {/* actividades turisticas */}
      <select className={ style.select } name='activities'  id='activities' onChange = { handleActivitiesCountry }>
      <option >Actividades Turísticas</option>      
            { activities?.sort().map( activities => (
                <option key = {activities.id} value = {activities.id}>{activities.name}</option>
            )) }
      </select>
     



{
activitiesCountry?.map(activTurist => {
        const countryNames = activTurist.searchActivityCountry.map(country => {
          let result = countriesPopulation?.find(element => element.id === country.CountryId);
          return result;
        });
          
          return (
            <Activity 
            key={activTurist.activity.id}
            name={activTurist.activity.name}            
            countryID={countryNames.map(country => <p key={country.id}>{country.name}</p>)}
            difficulty={activTurist.activity.difficulty}            
            duration={activTurist.activity.duration}            
            season={activTurist.activity.season}            
           
            />
             
        );
      })}



        

              
          <div className={ style.cardsCountries }>
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
    </div>
  )
}