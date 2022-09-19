import React from 'react'
import { Box, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import Titulo from '../../components/Titulo'
import TypoCustom from '../../components/TypoCustom'
import TituloDivisor from '../../components/TituloDivisor'
import CardPedido from '../../components/CardPedido'
import Footer from '../../components/Footer'
import ButtonCustom from '../../components/ButtonCustom'
import useProtectedPage from '../../hooks/useProtectedPage'

const Carrinho = () => {
  useProtectedPage()
  return (
    <Container  sx={{ maxWidth:'xs', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 8 }}>
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
      <Container  sx={{ maxWidth:'sm',p: 0, mt: '12px' }}>
        <Box sx={{ diplay: 'flex', flexDirection: 'column' }}>
          <TypoCustom texto='Bullguer Vila Madalena' cor='#e86e5a' size='16px' weight='500' pad='0 0 8px 0' />
          <TypoCustom texto='R. Fradique Coutinho, 1136 - Vila Madalena' cor='#b8b8b8' size='16px' weight='400' pad='0 0 8px 0' />
          <TypoCustom texto='30 - 45 min' cor='#b8b8b8' size='16px' weight='400' pad='0 0 8px 0' />
        </Box>
      </Container>
      <Container  sx={{maxWidth:'sm', p: 0, mt: '8px', mb: '12px' }}>
        <TituloDivisor texto='Principais' />
        <CardPedido
          photo='https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80.png'
          titulo='Bullguer'
          descricao='Pão, carne, queijo, picles e molho.'
          valor='R$20,00'
          quant='1'
          add='adicionar'
        />
        <CardPedido
          photo='https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80.png'
          titulo='Bullguer'
          descricao='Pão, carne, queijo, picles e molho.'
          valor='R$20,00'
          quant='2'
          add='remover'
        />
      </Container>
      <Box sx={{ width: '100%', display: 'flex' }}>
        <Box sx={{ height: '52px', flex: 1, display: 'flex', justifyContent: 'start', alignItems: 'end' }}>
          <TypoCustom texto='SUBTOTAL' size='16px' weight='500' pad='0' />
        </Box>
        <Box sx={{ height: '52px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }}>
          <TypoCustom texto='Frete R$6,00' size='16px' weight='500' pad='0 0 5px 0' />
          <TypoCustom texto='R$67,00' cor='#e86e5a' size='18px' weight='500' pad='5px 0 0 0' />
        </Box>
      </Box>
      <TituloDivisor texto='Forma de pagamento' pad='25px 0 0 0' />
      <Box sx={{ width: '100%' }}>
        <FormControl sx={{ p: 0 }}>
          <RadioGroup
            name="controlled-radio-buttons-group"
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="dinheiro" control={<Radio sx={{ my: 0, py: '4px' }} color='default' size='large' />} label={<Typography sx={{ fontSize: '16px', fontWeight: '500' }}>Dinheiro</Typography>} />
            <FormControlLabel value="cartão" control={<Radio sx={{ my: 0, py: '4px' }} color='default' size='large' />} label={<Typography sx={{ fontSize: '16px', fontWeight: '500' }}>Cartão de crédito</Typography>} />
          </RadioGroup>
        </FormControl>
      </Box>
      <ButtonCustom texto='Confirmar' />
      <Footer cart={true}/>
    </Container >

  )
}

export default Carrinho