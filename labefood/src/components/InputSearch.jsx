import React from 'react'
import { Box, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const InputSearch = ({ placeholder, onClick, value, onChange }) => {

  return (

    <Box sx={{ width: '100%', mb: 1 }}>
      <TextField sx={{
        width: '100%', "& .MuiOutlinedInput-root": {
          fontSize: '16px'
        }
      }}
        // error
        value={value}
        onChange={onChange}
        onFocus={onClick}
        required
        type='text'
        placeholder={placeholder}
        // helperText="Some important text"      //quando der erro ativa
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
}

export default InputSearch