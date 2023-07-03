import style from '../moduleCss/Activity.module.css';



export const Activity = ({id, name, countryID, difficulty ,duration, season}) => {
  return (
    <div key={id}>
      <table className={style.table}>
        <tbody>
          <tr>
            <th>Actividad</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Pais</th>
            <td>{countryID}</td>
          </tr>
          <tr>
            <th>Dificultad</th>
            <td>{difficulty}</td>
          </tr>
          <tr>
            <th>Duración</th>
            <td>{duration} Horas</td>
          </tr>
          <tr>
            <th>Temporada</th>
            <td>{season}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
