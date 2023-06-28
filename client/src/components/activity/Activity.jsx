



export const Activity = ({id, name, countryID, nameCountry}) => {

  return (
    <div key = {id}>             
            <h2>{ name }</h2>  
            <h3>{ countryID }</h3>
            
    </div>
  )
}

// { activitiesCountry?.map( country =>  
//     <div key={country.activity.id}>
//       {country.activity.name}            
//       {country.searchActivityCountry.map(e => (e.CountryId))}
//     </div>
//  )}  