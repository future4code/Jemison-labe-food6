import React, { useState, useEffect, useContext } from 'react'
import { Box, Dialog } from '@mui/material'
import GlobalContext from '../global/GlobalContext'
import { AccessTime } from '@mui/icons-material'
import TypoCustom from '../components/TypoCustom'
import useProtectedPage from '../hooks/useProtectedPage'
import { BASE_URL } from '../constants/url'
import axios from 'axios'

const PedidoDialog = ({ isDialogOpened, handleCloseDialog }) => {
    useProtectedPage()
    const context = useContext(GlobalContext)
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`${BASE_URL}/active-order`, { headers: { 'auth': token } })
            .then((res) => {
                context.setPopup(res.data.order)
            }).catch((error) => {
                console.log(error.message)
            })
    }, [])

    return (
        < Dialog
            open={isDialogOpened}
            onClose={handleCloseDialog}>
            <Box sx={{ width: '300px', height: '118px', bgcolor: '#e86e5a', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AccessTime sx={{ color: 'white', fontSize: '32px', flex: 1 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 3 }}>
                    <TypoCustom cor='white' size='14px' weight='300' texto='Pedido em andamento' />
                    <TypoCustom size='16px' weight='500' texto={context.popup && context.popup.order && context.popup.order.restaurantName} />
                    <TypoCustom size='16px' weight='600' texto={`SUBTOTAL R$${context.popup && context.popup.order && context.popup.order.totalPrice},00`} />
                </Box>
            </Box>
        </Dialog >
    )
}

export default PedidoDialog