import React from 'react'
import { Box, TextField } from '@mui/material'

const Input = ({ label, placeholder, id, value, onChange, required }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <TextField sx={{ width: '100%', my: 1 }}
                // error
                InputLabelProps={{ shrink: true }}
                onChange={onChange}
                value={value}
                id={id}
                label={label}
                placeholder={placeholder}
            // helperText="Some important text"      //quando der erro ativa
            />
        </Box>
    )
}

export default Input