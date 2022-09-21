import React from 'react'
import { Box, Container } from '@mui/material'
import InputSearch from '../../components/InputSearch'
import Titulo from '../../components/Titulo'
import Footer from '../../components/Footer'
import { AccessTime } from '@mui/icons-material'
import TypoCustom from '../../components/TypoCustom'
import useProtectedPage from '../../hooks/useProtectedPage'

const PedidoAndamento = () => {
  useProtectedPage()
  return (
    <Container maxWidth='xs' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 7 }}>
      <Titulo texto={"Rappi4"} />
      <Box sx={{ mb: 1, width: '100vw', borderTop: 1, color: '#DDD' }} />
      <InputSearch placeholder='Restaurante' />
      <Box sx={{ width: '100%', height: '118px', bgcolor: '#e86e5a', position: 'absolute', bottom: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <AccessTime sx={{ color: 'white', fontSize: '32px', flex: 1 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 3 }}>
          <TypoCustom cor='white' size='14px' weight='300' texto='Pedido em andamento' />
          <TypoCustom size='16px' weight='500' texto='Bullguer Vila Madalena' />
          <TypoCustom size='16px' weight='600' texto='SUBTOTAL R$67,00' />
        </Box>
      </Box>
      <Footer />
    </Container >
  )
}

export default PedidoAndamento