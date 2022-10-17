import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLogin, } from '../../route/Coordinator';
import { Box, Container } from '@mui/material'
import Logo from '../../img/Rappi4_Branco.svg'

const Home = () => {
  const navigate = useNavigate()
  const goToFeed = (navigate) => { navigate('/feed') }

  const token = localStorage.getItem('token')

  const teste = () => {
    if (token !== null) {
      goToFeed(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (
    <Container maxWidth='100vw' sx={{ bgcolor: '#e86e5a' }}>
      <Box onClick={() => teste()} height="100vh" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box component='img' src={Logo} alt='Logo' sx={{ width: 126, height: 65 }} />
      </Box>
    </Container>
  )
}

export default Home