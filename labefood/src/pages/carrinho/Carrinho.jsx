import React, { useState, useEffect, useContext } from 'react'
import { Box, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../global/GlobalContext'
import Titulo from '../../components/Titulo'
import TypoCustom from '../../components/TypoCustom'
import TituloDivisor from '../../components/TituloDivisor'
import CardPedido from '../../components/CardPedido'
import Footer from '../../components/Footer'
import ButtonCustom from '../../components/ButtonCustom'
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'

const Carrinho = () => {
  const context = useContext(GlobalContext)
  useProtectedPage()
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const id = context.data.id
  const carrinho = context.cart

  const [total, setTotal] = useState('')
  const [paymentSelected, setPaymentSelected] = useState('')
  const [cartFinal, setCartFinal] = useState([])

  const handleChange = (e) => {
    setPaymentSelected(e.target.value)
  }

  const bodyHandler = () => {
    let newBody = []
    carrinho.forEach(element => {
      newBody.push({ id: element.id, quantity: element.quant })
    });
    setCartFinal(newBody)
  }

  const body = { products: cartFinal, paymentMethod: paymentSelected }

  console.log(body)

  axios.post(`${BASE_URL}/restaurants/${id}/order`, body, { headers: { 'auth': token } })
    .then((res) => {
      console.log(res.data)
      context.setPedido(res.data)
      navigate(`/feed`)
      context.setOpen(true)
    }).catch((error) => {
      console.log(error.message)
    })

  useEffect(() => {
    let newPrice = 0
    carrinho.forEach(element => {
      newPrice += ((element?.price * element?.quant) + (element?.shipping / carrinho.length))
    });
    newPrice = newPrice.toFixed(2).toString().replace(".", ",")
    setTotal(newPrice)
    bodyHandler()
  }, [carrinho])


  return (
    <Container sx={{ maxWidth: 'xs', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 8 }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Titulo texto={"Meu carrinho"} />
      </Box>
      <Box sx={{ width: '100vw', borderTop: 1, color: '#DDD' }} />
      <Box sx={{ width: '100vw', height: '76px', bgcolor: '#eee', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', pl: 2 }}>
        <Box>
          <TypoCustom texto='Endereço de entrega' cor='#b8b8b8' size='16px' weight='500' pad='0 0 8px 0' />
        </Box>
        <Box>
          <TypoCustom texto='Rua Alessandra Vieira, 42' cor='black' size='16px' weight='500' pad='0 0 8px 0' />
        </Box>
      </Box>
      <Container sx={{ maxWidth: 'sm', p: 0, mt: '12px' }}>
        <Box sx={{ diplay: 'flex', flexDirection: 'column' }}>
          <TypoCustom texto='Bullguer Vila Madalena' cor='#e86e5a' size='16px' weight='500' pad='0 0 8px 0' />
          <TypoCustom texto='R. Fradique Coutinho, 1136 - Vila Madalena' cor='#b8b8b8' size='16px' weight='400' pad='0 0 8px 0' />
          <TypoCustom texto='30 - 45 min' cor='#b8b8b8' size='16px' weight='400' pad='0 0 8px 0' />
        </Box>
      </Container>
      <Container sx={{ maxWidth: 'sm', p: 0, mt: '8px', mb: '12px' }}>
        <TituloDivisor texto='Principais' />
        {carrinho.map((i, index) => {
          return (
            <CardPedido key={index} item={i} />
          )
        })}

      </Container>
      <Box sx={{ width: '100%', display: 'flex' }}>
        <Box sx={{ height: '52px', flex: 1, display: 'flex', justifyContent: 'start', alignItems: 'end' }}>
          <TypoCustom texto='SUBTOTAL' size='16px' weight='500' pad='0' />
        </Box>
        <Box sx={{ height: '52px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }}>
          <TypoCustom texto={`Frete R$ ${carrinho[0]?.shipping},00`} size='16px' weight='500' pad='0 0 5px 0' />
          <TypoCustom texto={`R$ ${total}`} cor='#e86e5a' size='18px' weight='500' pad='5px 0 0 0' />
        </Box>
      </Box>
      <TituloDivisor texto='Forma de pagamento' pad='25px 0 0 0' />
      <Box sx={{ width: '100%' }}>
        <FormControl sx={{ p: 0 }}>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={paymentSelected}
            onChange={handleChange}
          >
            <FormControlLabel value="money" control={<Radio sx={{ my: 0, py: '4px' }} color='default' size='medium' />} label={<Typography sx={{ fontSize: '16px', fontWeight: '500' }}>Dinheiro</Typography>} />
            <FormControlLabel value="creditcard" control={<Radio sx={{ my: 0, py: '4px' }} color='default' size='medium' />} label={<Typography sx={{ fontSize: '16px', fontWeight: '500' }}>Cartão de crédito</Typography>} />
          </RadioGroup>
        </FormControl>
      </Box>
      <ButtonCustom texto='Confirmar' />
      <Footer cart={true} />
    </Container >
  )
}

export default Carrinho