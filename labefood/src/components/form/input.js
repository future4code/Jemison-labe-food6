import { InputControl } from './stylesInput'



const Input = ({ type, text, name, placeholder, onChange, required, value }) => {
    return (

        <InputControl>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                value={value}
                
            />

        </InputControl>

    )
}

export default Input;