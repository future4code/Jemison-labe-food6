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
import { validateEmail, validateName, validateCpf } from './../../services/Regex'

const EditPerfil = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const goToPerf = (navigate) => { navigate('/perfil') }

    const [emailErr, setEmailErr] = useState(false)
    const [emailOk, setEmailOk] = useState('')
    const [nameErr, setNameErr] = useState(false)
    const [nameOk, setNameOk] = useState('')
    const [cpfErr, setCpfError] = useState(false)
    const [cpfOk, setCpfOk] = useState('')

    const validate = () => {
        if (!validateEmail.test(values.email)) {
        setEmailErr(true)
        setEmailOk('Insira um e-mail valido!')
        } else {
        setEmailErr(false)
        } if (!validateName.test(values.name)) {
        setNameErr(true)
        setNameOk('Insrira um nome e sobrenome.')
        } else {
        setNameErr(false)
        } if (!validateCpf.test(values.cpf)) {
        setCpfError(true)
        setCpfOk('Insrira um cpf valido.')
        } else {
        setCpfError(false)
        }
    }

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
        if (emailErr === false && nameErr === false && cpfErr === false) {
            adressConfig()
        }
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
                {emailErr && <p>Insira um e-mail valido!</p>}
                <Input
                    value={values.cpf}
                    label='CPF'
                    placeholder='000.000.000-00'
                    onChange={handleChange('cpf')}
                />
                {cpfErr && <p>Insira um CPF valido!</p>}
                <ButtonCustom onClick={() => validate()} type='submit' texto='Salvar' />
            </Box>
        </Container>
    )

}

export default EditPerfil