import React, { useState, useEffect } from 'react'
import { Box, TextField } from '@mui/material'

const Input = ({ label, placeholder, id, value, onChange, onClick }) => {

    return (
        <Box sx={{ width: '100%' }}>
            <TextField sx={{ width: '100%', my: 1 }}
                // error
                onFocus={onClick}
                InputLabelProps={{ shrink: true, pattern:"[A-Za-z]{3}" }}
                onChange={onChange}
                value={value}
                id={id}
                label={label}
                placeholder={placeholder}
                // helperText={textoErro ? textoErro : '' }
            />
        </Box>
    )
}

export default Input