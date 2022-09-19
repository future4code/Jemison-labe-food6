import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { BASE_URL } from '../../constants/url'
import { ArrowBackIos } from '@mui/icons-material'
// import useProtectedPage from '../../hooks/useProtectedPage'
import HorizontalList from '../../components/HorizontalList'
import InputSearch from '../../components/InputSearch'
import TypoCustom from '../../components/TypoCustom'
import CardFeed from '../../components/CardFeed'
import Titulo from '../../components/Titulo'
import Footer from '../../components/Footer'
import axios from 'axios'

const Feed = () => {
  // useProtectedPage()
  const navigate = useNavigate()

  // const token = localStorage.getItem('token')

  const [busca, setBusca] = useState('')
  const [feed, setFeed] = useState([])
  const [isFocused, setIsFocused] = useState(false)
  const [categoria, setCategoria] = useState('')

  const categorySearch = () => {
    if (busca === '' && categoria !== '') {
      setBusca(categoria)
      setIsFocused(true)
    }
  }

  const resetSearch = () => {
    setIsFocused(false)
    setBusca('')
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants`, {
      headers: {
        'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBYdTZ4alV5S2dOT21qdDZyc1ZrIiwibmFtZSI6IkthcHRob3MiLCJlbWFpbCI6Imp1YW4udG9ydGVyb2xvQGdtYWlsLmNvbSIsImNwZiI6IjQwOS4xMTIuMDM4LTUwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIERyLiBMaWNpbmlvIE1hcmFnbGlhbm8sIDMwOSwgY2FzYSAtIEpkLiBQcm9taXNzw6NvIiwiaWF0IjoxNjYzNjI1MjgzfQ.3PEYwCAHR_nI_glUoj8j8SEYDF89Qkye5wV9IpnNTMA'
      }
    })
      .then((res) => {
        setFeed(res.data.restaurants)
      }).catch((error) => {
        console.log(error.message)
      })
  }, [])

  useEffect(() => {
    categorySearch()
  }, [categoria])


  const testeFiltro = feed.filter((i) => {
    return (
      i.name.toLowerCase().startsWith(busca.toLowerCase()) || i.category.toLowerCase().startsWith(busca.toLowerCase())
    )
  })

  if (!isFocused) {
    return (
      <Container maxWidth='xs' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 7 }}>
        <Titulo texto={"Rappi4"} />
        <Box sx={{ mb: 1, width: '100vw', borderTop: 1, color: '#DDD' }} />
        <InputSearch placeholder='Restaurante' onClick={() => setIsFocused(true)} value={busca} />
        <HorizontalList onClick={e => setCategoria(e.target.value)} />
        {feed.map((i) => {
          return (<CardFeed key={i.id}
            onClick={() => navigate(`/Restaurante/${i.id}`)}
            storeName={i.name}
            deliveryTime={i.deliveryTime}
            fee={i.shipping}
            imgCard={i.logoUrl}
          />)
        })}
        <Footer feed={true} />
      </Container >
    )
  } else {
    return (
      <Container maxWidth='xs' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 7 }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <ArrowBackIos onClick={() => resetSearch()} />
          <Titulo texto={"Busca"} />
        </Box>
        <Box sx={{ mb: 1, width: '100vw', borderTop: 1, color: '#DDD' }} />
        <InputSearch placeholder='Restaurante' onClick={() => setIsFocused(true)} onChange={e => setBusca(e.target.value)} />
        {testeFiltro.length > 0 ? busca === '' ? <TypoCustom texto='Busque por nome de restaurante' size='16px' weight='500' /> : testeFiltro.map((i) => {
          return (<CardFeed key={i.id}
            onClick={() => navigate(`/Restaurante/${i.id}`)}
            storeName={i.name}
            deliveryTime={i.deliveryTime}
            fee={i.shipping}
            imgCard={i.logoUrl}
          />)
        }) : <Box sx={{mt:'18px'}}><TypoCustom texto='Não encontramos :(' size='16px' weight='500' /></Box>}
        <Box sx={{ mt: '18px' }}>
        </Box>
      </Container >
    )
  }
}

export default Feed