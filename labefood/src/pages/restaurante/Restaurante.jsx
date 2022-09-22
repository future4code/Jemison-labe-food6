import React, { useState, useEffect } from 'react'
import { Box, Card, CardMedia, Container } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBackIos } from '@mui/icons-material'
import {BASE_URL} from '../../constants/url'
import useProtectedPage from '../../hooks/useProtectedPage'
import TituloDivisor from '../../components/TituloDivisor'
import TypoCustom from '../../components/TypoCustom'
import CardPedido from '../../components/CardPedido'
import Titulo from '../../components/Titulo'
import axios from 'axios'

const Restaurante = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const goBack = (navigate) => { navigate(-1) }
  const { id } = useParams()

  const token = localStorage.getItem('token')

  const [data, setData] = useState([])
  const [dataProd, setDataProd] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants/${id}`, {
      headers: {
        'auth': token
      }
    })
      .then((res) => {
        setData(res.data.restaurant)
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
        <Titulo texto={data.name} />
      </Box>
      <Box sx={{ mb: 1, width: '100vw', borderTop: 1, color: '#DDD' }} />
      <Card sx={{ width: '100%', borderRadius: '8px 8px 0 0', boxShadow: 'none' }}>
        <CardMedia component='img' alt='burger' height='120' image={data.logoUrl} />
      </Card>
      <Container maxWidth='sm' sx={{ p: 0, mt: '12px' }}>
        <Box sx={{ diplay: 'flex', flexDirection: 'column' }}>
          <TypoCustom texto={data.name} cor='#e86e5a' size='16px' weight='500' />
          <TypoCustom texto={data.category} cor='#b8b8b8' size='16px' weight='400' />
          <TypoCustom texto={`${data.deliveryTime} min`} cor='#b8b8b8' size='16px' weight='400' />
          <TypoCustom texto={`R$ ${data.shipping},00`} cor='#b8b8b8' size='16px' weight='400' />
          <TypoCustom texto={`${data.address}`} cor='#b8b8b8' size='16px' weight='400' />
        </Box>
      </Container>
      <Container maxWidth='sm' sx={{ p: 0, mt: '-25px' }}>
        {Object.keys(categorizedData).map((cat, index) => {
          return (
            <div key={index}>
              <TituloDivisor texto={cat} />
              {categorizedData[cat].items.map((item, index) => {
                return (
                  <CardPedido key={index}
                    id={item.id}                    
                    photo={item.photoUrl}
                    titulo={item.name}
                    descricao={item.description}
                    valor={`R$ ${item.price}`}
                  />
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