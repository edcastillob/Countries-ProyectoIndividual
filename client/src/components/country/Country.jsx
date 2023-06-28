import { NavLink } from 'react-router-dom';



export const Country = ({id, name, flags, region}) => {

  return (
    <div key = {id}>   
           
            <h2>{ name }</h2>            
            <NavLink title='Detail Country' to={`/detail/${id}`}>
            <img src={ flags } alt={ name } />
            </NavLink>     
            <h3>{ region }</h3>
            
            
        
    </div>
  )
}

