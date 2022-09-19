import { InputControl } from './stylesInput'



const Input = ({ type, text, name, placeholder, handleOnChange, required, value }) => {
    return (

        <InputControl>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                required={required}
                onChange={handleOnChange}
                value={value}
                
            />

        </InputControl>

    )
}

export default Input;