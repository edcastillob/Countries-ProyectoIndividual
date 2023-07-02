<<<<<<< HEAD
// import { useState } from 'react'
=======
import { useState } from 'react'
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
import './App.css'
import { Countries } from './components/countries/Countries';
import { Routes, Route, useLocation } from 'react-router-dom';
// import { SearchBar } from './components/searchBar/SearchBar';
import { Detail } from './components/countryDetail/Detail';
import { FormActivities } from './components/form/FormActivities';
import { Navbar } from './components/navBar/Navbar';
import { Home } from './components/home/Home';
<<<<<<< HEAD
import { Activities } from './components/activities/Activities';
// import { Region } from './components/filter/region/Region';
=======
import { Region } from './components/filter/region/Region';
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb



export function App() {
  const location = useLocation();
 
  return (
    <>
    {
       (location.pathname === '/') ? null : <Navbar />
    }
     <Routes>

<<<<<<< HEAD
      
=======
      <Route exact path = '/region' element = { <Region /> }/>  
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
      <Route exact path = '/home' element = { <Home /> }/>  
      <Route exact path = '/countries' element = { <Countries /> }/>  
      <Route exact path = '/detail/:id' element = { <Detail /> }/>  
      <Route exact path = '/activities' element = { <FormActivities /> }/>  
<<<<<<< HEAD
      <Route exact path = '/activity' element = { <Activities /> }/>  
=======
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb
      
    </Routes>   
 
      
    </>
  )
}


