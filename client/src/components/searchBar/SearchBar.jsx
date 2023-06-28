import { useState } from "react";
import { searchCountryName } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    // const countriesState = useSelector((state)=> state.countries);

    const handleChange = ({target}) => { 
        const { value } = target;
        console.log(value)
        setName(value);
    }

    const handleClick = (event) => { 
        event.preventDefault();
        dispatch(searchCountryName(name));
        setName('')
    }
  return (
    <div>
        <input 
        type ='search'
        placeholder = ' -== name/ Name ==- '
        name = 'name' 
        value = { name }
        onChange = { handleChange }
        />

        <button 
        type ='submit'
        onClick = { handleClick }
        >Buscar
        </button>
    </div>
  )
}
