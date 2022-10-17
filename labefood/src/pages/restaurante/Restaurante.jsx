import React, { useState, useEffect,useContext } from 'react'
import GlobalContext from '../../global/GlobalContext'
import { Box, Card, CardMedia, Container } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBackIos } from '@mui/icons-material'
import { BASE_URL } from '../../constants/url'
import useProtectedPage from '../../hooks/useProtectedPage'
import TituloDivisor from '../../components/TituloDivisor'
import TypoCustom from '../../components/TypoCustom'
import CardPedido from '../../components/CardPedido'
import Titulo from '../../components/Titulo'
import axios from 'axios'

const Restaurante = () => {
  useProtectedPage()
  const context = useContext(GlobalContext)

  const navigate = useNavigate()
  const goBack = (navigate) => { navigate(-1) }
  const { id } = useParams()

  const token = localStorage.getItem('token')

  // const [data, setData] = useState([])
  const [dataProd, setDataProd] = useState([])

  // const [cart, context.setCart] = useState([])

  const addToCart = (produto, amount) => {
    const newCart = { ...produto, quant: amount, shipping: context.data.shipping }
    const productIndex = context.cart.findIndex((i) => i.id === newCart.id)

    if (productIndex === -1) {
      context.setCart([...context.cart, newCart])
    } else {
      const updatedCart = context.cart.slice(0, context.cart.length - 1)
      context.setCart([...updatedCart, newCart])
      if (newCart.quant === 0){
        const updatedCart = context.cart.slice(0, context.cart.length - 1)
        context.setCart([...updatedCart])
      }
    }
  }


  console.log(context.cart)

  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants/${id}`, {
      headers: {
        'auth': token
      }
    })
      .then((res) => {
        context.setData(res.data.restaurant)
        setDataProd(res.data.restaurant.products)
      }).catch((error) => {
        console.log(error.message)
      })
  }, [])

  const categorizedData = dataProd.reduce((prod, dados) => {
    const { id, photoUrl, price, description, category, name } = dados;

    if (!prod[category]) {
      prod[category] = {
        items: [],
      };
    }
    prod[category].items.push({ id, photoUrl, price, description, name });

    return prod;
  }, {});

  return (
    <Container maxWidth='xs' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 8 }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <ArrowBackIos onClick={() => goBack(navigate)} />
        <Titulo texto={context.data.name} />
      </Box>
      <Box sx={{ mb: 1, width: '100vw', borderTop: 1, color: '#DDD' }} />
      <Card sx={{ width: '100%', borderRadius: '8px 8px 0 0', boxShadow: 'none' }}>
        <CardMedia component='img' alt='burger' height='120' image={context.data.logoUrl} />
      </Card>
      <Container maxWidth='sm' sx={{ p: 0, mt: '12px' }}>
        <Box sx={{ diplay: 'flex', flexDirection: 'column' }}>
          <TypoCustom texto={context.data.name} cor='#e86e5a' size='16px' weight='500' />
          <TypoCustom texto={context.data.category} cor='#b8b8b8' size='16px' weight='400' />
          <TypoCustom texto={`${context.data.deliveryTime} min`} cor='#b8b8b8' size='16px' weight='400' />
          <TypoCustom texto={`R$ ${context.data.shipping},00`} cor='#b8b8b8' size='16px' weight='400' />
          <TypoCustom texto={`${context.data.address}`} cor='#b8b8b8' size='16px' weight='400' />
        </Box>
      </Container>
      <Container maxWidth='sm' sx={{ p: 0, mt: '-25px' }}>
        {Object.keys(categorizedData).map((cat, index) => {
          return (
            <div key={index}>
              <TituloDivisor texto={cat} />
              {categorizedData[cat].items.map((item, index) => {
                return (
                  <CardPedido key={index} item={item} addToCart={addToCart} />
                )
              })}
            </div>
          )
        })}
      </Container>
    </Container >
  )
}

export default Restaurante