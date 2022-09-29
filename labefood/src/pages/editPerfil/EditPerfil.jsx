import React, { useState, useEffect } from 'react'
import { ArrowBackIos } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { BASE_URL } from '../../constants/url'
import useProtectedPage from '../../hooks/useProtectedPage'
import ButtonCustom from '../../components/ButtonCustom'
import Titulo from '../../components/Titulo'
import Input from '../../components/Input'
import axios from 'axios'

const EditPerfil = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const goToPerf = (navigate) => { navigate('/perfil') }

    const token = localStorage.getItem('token')

    const [values, setValues] = useState({
        name: '',
        email: '',
        cpf: '',
    })

    console.log(values)

    useEffect(() => {
        axios.get(`${BASE_URL}/profile`, {
            headers: {
                'auth': token
            }
        }).then((res) => {
            setValues(res.data.user)
        }).catch((error) => {
            console.log(error.message)
        })
    }, [])

    const adressConfig = () => {
            axios.put(`${BASE_URL}/profile`, {
            "name": values.name,
            "email": values.email,
            "cpf": values.cpf,
        }, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                goToPerf(navigate)
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
                <ArrowBackIos onClick={() => goToPerf(navigate)} />
                <Titulo texto={"Editar"} />
            </Box>
            <Box sx={{ mb: 1, width: '100vw', borderTop: 1, color: '#DDD' }} />
            <Box onSubmit={handleSubmit} component='form' sx={{ width: '100%' }} >
                <Input
                    value={values.name}
                    label='Nome'
                    placeholder='Nome e sobrenome'
                    onChange={handleChange('name')}
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