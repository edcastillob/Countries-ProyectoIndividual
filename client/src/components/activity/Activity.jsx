





export const Activity = ({id, name, difficulty ,duration, season, flags, region, countryID}) => {

  return (
    <div key = {id}>             
            <h2>{ name }</h2>  
            <h2>{ difficulty }</h2>
            <h2>{ duration }</h2>
            <h2>{ season }</h2>
            <h2>{ flags }</h2>
            <h2>{ region }</h2>
            <h2>{ countryID }</h2>
            
    </div>
  )
}
