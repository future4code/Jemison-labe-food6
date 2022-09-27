import React, {useState} from 'react'
import { Box, Container } from '@mui/material'
import InputSearch from '../../components/InputSearch'
import Titulo from '../../components/Titulo'
import Footer from '../../components/Footer'
import { AccessTime } from '@mui/icons-material'
import TypoCustom from '../../components/TypoCustom'
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'

const PedidoAndamento = () => {
  useProtectedPage()
  const token = localStorage.getItem('token')

  const [data, setData] = useState()

  axios.get(`${BASE_URL}/active-order`, { headers: { 'auth': token } })
    .then((res) => {
      setData(res.data)
    }).catch((error) => {
      console.log(error.message)
    })

  return (
    <Container maxWidth='xs' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 7 }}>
      <Titulo texto={"Rappi4"} />
      <Box sx={{ mb: 1, width: '100vw', borderTop: 1, color: '#DDD' }} />
      <InputSearch placeholder='Restaurante' />
      <Box sx={{ width: '100%', height: '118px', bgcolor: '#e86e5a', position: 'absolute', bottom: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <AccessTime sx={{ color: 'white', fontSize: '32px', flex: 1 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 3 }}>
          <TypoCustom cor='white' size='14px' weight='300' texto='Pedido em andamento' />
          <TypoCustom size='16px' weight='500' texto={data?.order.restaurantName} />
          <TypoCustom size='16px' weight='600' texto={`SUBTOTAL R$${data?.order.totalPrice},00`} />
        </Box>
      </Box>
      <Footer />
    </Container >
  )
}

export default PedidoAndamento