import { useState } from 'react'
import './App.css'
import { Countries } from './components/countries/Countries';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SearchBar } from './components/searchBar/SearchBar';
import { Detail } from './countryDetail/Detail';


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
      
    </Routes>   
 
      
    </>
  )
}


