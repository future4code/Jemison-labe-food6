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
import { validateStreet, validateComp, validateNumber, validateNeighbourhood, validateCity, validateState } from './../../services/Regex'

const EditEndereco = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const goToPerf = (navigate) => { navigate('/perfil') }

    const token = localStorage.getItem('token')

    const [streetErr, setStreetlErr] = useState(false)
    const [streetOk, setStreetOk] = useState('')
    const [numberErr, setNumberErr] = useState(false)
    const [numberOk, setNumberOk] = useState('')
    const [compErr, setCompErr] = useState(false)
    const [compOk, setCompOk] = useState('')
    const [neighbourhoodErr, setNeighbourhoodErr] = useState(false)
    const [neighbourhoodOk, setNeighbourhoodOk] = useState('')
    const [cityErr, setCityErr] = useState(false)
    const [cityOk, setCityOk] = useState('')
    const [stateErr, setStateErr] = useState(false)
    const [stateOk, setStateOk] = useState('')
    
    const validate = () => {
        if (!validateStreet.test(values.street)) {
            setStreetlErr(true)
            setStreetOk('Insira um logradouro  valido!')
        } else {
            setStreetlErr(false)
        } if (!validateNumber.test(values.number)) {
            setNumberErr(true)
            setNumberOk('Insira um número valido!')
        } else {
            setNumberErr(false)
        } if (!validateComp.test(values.complement)) {
            setCompErr(true)
            setCompOk('Insira um complemento valido!')
        } else {
            setCompErr(false)
        } if (!validateNeighbourhood.test(values.neighbourhood)) {
            setNeighbourhoodErr(true)
            setNeighbourhoodOk('Insira um bairro valido!')
        } else {
            setNeighbourhoodErr(false)
        }
        if (!validateCity.test(values.city)) {
            setCityErr(true)
            setCityOk('Insira uma cidade  valida!')
        } else {
            setCityErr(false)
        } if (!validateState.test(values.state)) {
            setStateErr(true)
            setStateOk('Insira um estado valido!')
        } else {
            setStateErr(false)
        }
    }

    const [values, setValues] = useState({
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: '',
    })

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
                'auth': token
            }
        })
            .then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log(error.response.data)
            })
    }

    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (streetErr === false && numberErr === false && compErr === false && neighbourhoodErr === false && cityErr === false && stateErr === false) {
          adressConfig()
          goToPerf(navigate)
        }
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
                    error={streetErr}
                    value={values.street}
                    label='Logradouro'
                    placeholder='Rua / Av.'
                    onChange={handleChange('street')}
                    helperText={streetErr ? streetOk : ''}
                />
                {streetErr && <p>Insira um logradouro valido!</p>}
                <Input
                    error={numberErr}
                    value={values.number}
                    label='Número'
                    placeholder='Número'
                    onChange={handleChange('number')}
                    helperText={numberErr ? numberOk : ''}
                />
                {numberErr && <p>Insira um número valido!</p>}
                <Input
                    error={compErr}
                    value={values.complement}
                    label='Complemento'
                    placeholder='Apto. / Bloco'
                    onChange={handleChange('complement')}
                    helperText={compErr ? compOk : ''}
                />
                {compErr && <p>Insira um complemento valido!</p>}
                <Input
                    error={neighbourhoodErr}
                    value={values.neighbourhood}
                    label='Bairro'
                    placeholder='Bairro'
                    onChange={handleChange('neighbourhood')}
                    helperText={neighbourhoodErr ? neighbourhoodOk : ''}
                />
                {neighbourhoodErr && <p>Insira um bairro valido!</p>}
                <Input
                    error={cityErr}
                    value={values.city}
                    label='Cidade'
                    placeholder='Cidade'
                    onChange={handleChange('city')}
                    helperText={cityErr ? cityOk : ''}
                />
                {cityErr && <p>Insira uma cidade  valida!</p>}
                <Input
                    error={stateErr}
                    value={values.state}
                    label='Estado'
                    placeholder='Estado'
                    onChange={handleChange('state')}
                    helperText={stateErr ? stateOk : ''}
                />
                {stateErr && <p>Insira uma estado  valido!</p>}
                <ButtonCustom onClick={() => validate()} type='submit' texto='Salvar' />
            </Box>
        </Container>
    )
}

export default EditEndereco