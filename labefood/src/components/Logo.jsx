import React from 'react'
import LogoDefault from '../img/Rappi4_Logo.svg'
import { Box } from '@mui/material'

const Logo = () => {
  return (
    <Box component='img' src={LogoDefault} alt='Logo' sx={{ width: 126, height: 65, my:1 }} />
  )
}

export default Logo