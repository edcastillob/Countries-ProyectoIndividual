





<<<<<<< HEAD
export const Activity = ({id, name, countryID, difficulty ,duration, season}) => {
=======
export const Activity = ({id, name, countryID, difficulty ,duration, season, flags}) => {
>>>>>>> ff34d482a7ed0b676587ca19fe44b5904d467dbb

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
