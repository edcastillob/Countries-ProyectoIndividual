import { useState } from 'react'
import './App.css'
import { Countries } from './components/countries/Countries';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SearchBar } from './components/searchBar/SearchBar';

export function App() {
  const location = useLocation();

  return (
    <>
    {
       location.pathname !== '/' && <SearchBar />
    }
     <Routes>
      <Route exact path = '/countries' element = { <Countries /> }/>  
      
    </Routes>   
 
      
    </>
  )
}


