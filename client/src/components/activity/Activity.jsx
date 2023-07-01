





export const Activity = ({id, name, countryID, difficulty ,duration, season, flags}) => {

  return (
    <div key = {id}>             
            <h2>Actividad: { name }</h2>  
            <h2>Pais: {countryID}</h2>
            <h2>Dificultad: { difficulty }</h2>
            <h2>Duración: { duration } Horas</h2>
            <h2>Temporada: { season }</h2>                      
            
            
            
    </div>
  )
}
