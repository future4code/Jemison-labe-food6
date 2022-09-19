import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Titulo from '../../components/Titulo'
import Input from '../../components/Input'
import ButtonCustom from '../../components/ButtonCustom'
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import { ArrowBackIos } from '@mui/icons-material'

const EditPerfil = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const goToFeed = (navigate) => { navigate('/feed') }

    const [values, setValues] = useState({
        nome: '',
        email: '',
        cpf: '',
    })

    const adressConfig = () => {
        const token = localStorage.getItem('token')

        axios.put(`${BASE_URL}/address`, {
            "name": values.nome,
            "email": values.email,
            "cpf": values.cpf,
        }, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                goToFeed(navigate)
            }).catch((error) => {
                console.log(error.response.data)
            })
    }

    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        adressConfig()
    }

    useEffect(() => {
        adressConfig()
    }, [])

    return (
        <Container maxWidth='sm' sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <ArrowBackIos />
                <Titulo texto={"Editar"} />
            </Box>
            <Box sx={{ mb: 1, width: '100vw', borderTop: 1, color: '#DDD' }} />
            <Box onSubmit={handleSubmit} component='form' sx={{ width: '100%' }} >
                <Input
                    value={values.name}
                    label='Nome'
                    placeholder='Nome e sobrenome'
                    onChange={handleChange('nome')}
                />
                <Input
                    value={values.email}
                    label='E-mail'
                    placeholder='email@email.com'
                    onChange={handleChange('email')}
                />
                <Input
                    value={values.cpf}
                    label='CPF'
                    placeholder='000.000.000-00'
                    onChange={handleChange('cpf')}
                />
                <ButtonCustom type='submit' texto='Salvar' />
            </Box>
        </Container>
    )

}

export default EditPerfil