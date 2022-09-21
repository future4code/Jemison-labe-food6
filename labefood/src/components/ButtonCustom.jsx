import React from 'react'
import { Button, Typography } from '@mui/material'

const ButtonCustom = ({texto, onClick, type}) => {
  
  return (
    <Button type={type} onClick={onClick} variant="contained" sx={{width:'100%',height:'42px', py:'12px', px:'16px', textTransform:'none', my:1, bgcolor:'#e86e5a'}}>
    <Typography fontSize='16px' fontWeight='500' color='black' sx={{ letterSpacing: -0.4 }}>{texto}</Typography>
  </Button>
  )
}

export default ButtonCustom