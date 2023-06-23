// import { showCountries } from ('../../redux/actions/actions');



export const Country = ({id, name, flags, region}) => {

  return (
    <div>        
            <h2>{ name }</h2>
            <h2>{ id }</h2>
            <img src={ flags } alt={ name } />
            <h3>{ region }</h3>
        
    </div>
  )
}

