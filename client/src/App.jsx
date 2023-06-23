import { useState } from 'react'
import './App.css'
import { Countries } from './components/countries/Countries';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SearchBar } from './components/searchBar/SearchBar';
import { Detail } from './components/countryDetail/Detail';
import { FormActivities } from './components/form/FormActivities';


export function App() {
  const location = useLocation();
  const sb =location.pathname;
  return (
    <>
    {
       (sb !== '/countries') ? null : <SearchBar />
    }
     <Routes>
      <Route exact path = '/countries' element = { <Countries /> }/>  
      <Route exact path = '/detail/:id' element = { <Detail /> }/>  
      <Route exact path = '/activities' element = { <FormActivities /> }/>  
      
    </Routes>   
 
      
    </>
  )
}


