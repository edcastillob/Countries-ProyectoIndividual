import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function pagPopulation (){
  const countryPopulation = useSelector((state)=> state.countryPopulation);

  const ITEMS_FOR_PAGE = 10; 
  const [currentPage, setCurrentPage] = useState(0);
   const [itemPopulation, setItemPopulation] = useState([...countryPopulation]?.splice(0, ITEMS_FOR_PAGE))
  
   const handleNext = () => {
    const nextPage = currentPage + 1;
    const index = nextPage * ITEMS_FOR_PAGE;
  
    if(index >= countryPopulation.length) return;
    setItemPopulation([...countryPopulation]?.splice(index, ITEMS_FOR_PAGE))
    setCurrentPage(nextPage)
   };
  
   const handlePrev = () => {
    const prevPage = currentPage - 1;
    const index = prevPage * ITEMS_FOR_PAGE;
    if(prevPage < 0) return;
  
    setItemPopulation([...countryPopulation]?.splice(index, ITEMS_FOR_PAGE))
    setCurrentPage(prevPage)
   };
  
   useEffect(() => {setItemPopulation([...countryPopulation]?.splice(0, ITEMS_FOR_PAGE))
    // setItemPopulation([...countryPopulation].splice(0, ITEMS_FOR_PAGE))
  }, [countryPopulation])
  //-------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------
}

export default pagPopulation;

