import React, { useState, useEffect } from 'react'
import { Box, Card, CardMedia, Typography, CardContent, CardActionArea } from '@mui/material'
import QuantDialog from './QuantDialog'

const CardPedido = ({ photo, titulo, descricao, valor, id }) => {
    const [open, setOpen] = useState(false);
    const [quantSelected, setQuantSelected] = useState(0)
    const [testeArray, setTesteArray] = useState([])
    
    const [objetoTodo, setObjetoTodo] = useState({
        foto: photo,
        nome: titulo,
        desc: descricao,
        valor: valor,
        id: id,
        quantidade: quantSelected
    })

    console.log(testeArray)
    console.log(quantSelected)

    const removeQuant = () => {
        setQuantSelected(quantSelected => quantSelected - 1)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getQuant = (seila) => {
        setQuantSelected(seila)
    }

    const handleTeste = () => {
        if (quantSelected > 0 ){
            setTesteArray([...testeArray, objetoTodo, quantSelected])
        } else {
            console.log("mais ou menos")
        }
    }

    useEffect(() => {
        handleTeste()
    }, [quantSelected])


    return (
        <Card value={id} sx={{ borderRadius: '8px', my: '12px', boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.25)' }}>
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
                    <Box sx={{ border: '1px solid #e86e5a', height: '33px', width: '33px', borderRadius: '0 8px 0 8px', position: 'absolute', right: '0', top: '0', display: quantSelected > 0 ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography color='#e86e5a' fontSize='12px'>
                            {quantSelected}
                        </Typography>
                    </Box>
                    <Box onClick={quantSelected > 0 ? removeQuant : handleClickOpen} sx={{ border: quantSelected > 0 ? '1px solid #e86e5a' : '1px solid #000', height: '30px', width: '90px', borderRadius: '8px 0 8px 0', position: 'absolute', right: '0', bottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography fontSize='12px' sx={{ color: quantSelected > 0 ? '#e86e5a' : '#000' }}>
                            {quantSelected > 0 ? 'remover' : 'adicionar'}
                        </Typography>
                    </Box>
                    <QuantDialog isDialogOpened={open} handleCloseDialog={handleClose} onChange={getQuant} />
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardPedido