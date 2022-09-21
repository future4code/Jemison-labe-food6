import React from 'react'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'

const InputSenha = ({ label, placeholder, id, onChange, onClick, onMouseDown, type, value, testeee }) => {
    
    return (
        <FormControl sx={{ width: '100%', my:1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={onClick}
                            onMouseDown={onMouseDown}
                            edge="end"
                        >
                            {testeee}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    )
}

export default InputSenha