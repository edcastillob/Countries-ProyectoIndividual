import { useState } from 'react'
import './App.css'
import { Countries } from './components/countries/Countries';
import { Routes, Route, useLocation } from 'react-router-dom';
// import { SearchBar } from './components/searchBar/SearchBar';
import { Detail } from './components/countryDetail/Detail';
import { FormActivities } from './components/form/FormActivities';
import { Navbar } from './components/navBar/Navbar';
import { Home } from './components/home/Home';
import { Region } from './components/filter/region/Region';



export function App() {
  const location = useLocation();
 
  return (
    <>
    {
       (location.pathname === '/') ? null : <Navbar />
    }
     <Routes>

      <Route exact path = '/region' element = { <Region /> }/>  
      <Route exact path = '/home' element = { <Home /> }/>  
      <Route exact path = '/countries' element = { <Countries /> }/>  
      <Route exact path = '/detail/:id' element = { <Detail /> }/>  
      <Route exact path = '/activities' element = { <FormActivities /> }/>  
      
    </Routes>   
 
      
    </>
  )
}


