import React, { useState, useEffect } from 'react'
import { ArrowBackIos } from '@mui/icons-material'
import { Box, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import useProtectedPage from '../../hooks/useProtectedPage'
import ButtonCustom from '../../components/ButtonCustom'
import Titulo from '../../components/Titulo'
import Input from '../../components/Input'
import axios from 'axios'

const EditEndereco = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const goToPerf = (navigate) => { navigate('/perfil') }

    const token = localStorage.getItem('token')

    const [values, setValues] = useState({
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: '',
    })

    console.log(values)

    useEffect(() => {
        axios.get(`${BASE_URL}/profile/address`, {
            headers: {
                auth: token
            }
        }).then((res) => {
            setValues(res.data.address)
        }).catch((error) => {
            console.log(error.message)
        })
    }, [])

    const adressConfig = () => {
        axios.put(`${BASE_URL}/address`, {
            "street": values.street,
            "number": values.number,
            "neighbourhood": values.neighbourhood,
            "city": values.city,
            "state": values.state,
            "complement": values.complement
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
                <Titulo texto={"Endereço"} />
            </Box>
            <Box sx={{ mb: 1, width: '100vw', borderTop: 1, color: '#DDD' }} />
            <Box onSubmit={handleSubmit} component='form' sx={{ width: '100%' }} >
                <Input
                    value={values.street}
                    label='Logradouro'
                    placeholder='Rua / Av.'
                    onChange={handleChange('street')}
                />
                <Input
                    value={values.number}
                    label='Número'
                    placeholder='Número'
                    onChange={handleChange('number')}
                />
                <Input
                    value={values.complement}
                    label='Complemento'
                    placeholder='Apto. / Bloco'
                    onChange={handleChange('complement')}
                />
                <Input
                    value={values.neighbourhood}
                    label='Bairro'
                    placeholder='Bairro'
                    onChange={handleChange('neighbourhood')}
                />
                <Input
                    value={values.city}
                    label='Cidade'
                    placeholder='Cidade'
                    onChange={handleChange('city')}
                />
                <Input
                    value={values.state}
                    label='Estado'
                    placeholder='Estado'
                    onChange={handleChange('state')}
                />
                <ButtonCustom type='submit' texto='Salvar' />
            </Box>
        </Container>
    )
}

export default EditEndereco