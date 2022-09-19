import React, { useState } from 'react'
import { Box, Card, CardMedia, Typography, CardContent, CardActionArea } from '@mui/material'
import QuantDialog from './QuantDialog'

const CardPedido = ({ photo, titulo, descricao, valor, quant, add }) => {
    const [open, setOpen] = useState(false);

    const txtColors = {
        adicionar: '#000',
        remover: '#e86e5a'
    }

    const borderColors = {
        adicionar: '1px solid #000',
        remover: '1px solid #e86e5a'
    }
    const quantBox = {
        adicionar: 'none',
        remover: 'flex'
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card maxWidth='sm' sx={{ borderRadius: '8px', my: '12px', boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.25)' }}>
            <CardActionArea sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CardMedia component="img" sx={{ width: '97px', height: '128px', flex: 1 }} image={photo} alt="burger" />
                <CardContent sx={{ flex: 2, py: 0 }}>
                    <Typography component='div' fontWeight='500' fontSize='16px' color='#e86e5a' sx={{ p: 0 }}>
                        {titulo}
                    </Typography>
                    <Typography color='#b8b8b8' fontSize='16px'>
                        {descricao}
                    </Typography>
                    <Typography color='#000' fontWeight='500' fontSize='16px'>
                        {valor}
                    </Typography>
                    <Box sx={{ border: '1px solid #e86e5a', height: '33px', width: '33px', borderRadius: '0 8px 0 8px', position: 'absolute', right: '0', top: '0', display: quantBox[add], justifyContent: 'center', alignItems: 'center' }}>
                        <Typography color='#e86e5a' fontSize='12px'>
                            {quant}
                        </Typography>
                    </Box>
                    <Box onClick={handleClickOpen} sx={{ border: borderColors[add], height: '30px', width: '90px', borderRadius: '8px 0 8px 0', position: 'absolute', right: '0', bottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography fontSize='12px' sx={{ color: txtColors[add] }}>
                            {add}
                        </Typography>
                    </Box>
                    <QuantDialog isDialogOpened={open} handleCloseDialog={handleClose}/>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardPedido