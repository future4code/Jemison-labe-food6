import React, { useState, useEffect } from 'react'
import { Box, Container, SvgIcon } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import TituloDivisor from '../../components/TituloDivisor'
import useProtectedPage from '../../hooks/useProtectedPage'
import CardHistorico from '../../components/CardHistorico'
import TypoCustom from '../../components/TypoCustom'
import Titulo from '../../components/Titulo'
import Footer from '../../components/Footer'
import axios from 'axios'

const Perfil = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const goToEditPerf = (navigate) => { navigate('/editPerfil') }
    const goToEditEnd = (navigate) => { navigate('/editEndereco') }

    const [values, setValues] = useState({})
    const [history, setHistory] = useState([])

    const token = localStorage.getItem('token')

    const adressConfig = () => {
        axios.get(`${BASE_URL}/profile`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setValues(response.data)
            }).catch((error) => {
                console.log(error.response)
            })
    }

    const historico = () => {
        axios.get(`${BASE_URL}/orders/history`, {
            headers: {
                auth: token
            }
        }).then((res) => {
            setHistory(res.data.orders)
        }).catch((error) => {
            console.log(error.message)
        })
    }


    useEffect(() => {
        adressConfig()
        historico()
    }, [])

    return (
        <Container maxWidth='xs' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 8 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Titulo texto={"Meu Pefil"} />
            </Box>
            <Box sx={{ width: '100vw', borderTop: 1, color: '#DDD' }} />
            <Container sx={{ p: 0, mt: '12px' }}>
                <Box sx={{ diplay: 'flex', flexDirection: 'column', mb: '8px' }}>
                    <SvgIcon onClick={() => goToEditPerf(navigate)} sx={{ fontSize: '26px', position: 'absolute', right: '20px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <defs>
                            <path id="a" d="M0 0h16v16H0z" />
                        </defs>
                        <g transform="translate(4 4)">
                            <path fill="#000" d="M9.83 2.836L0 12.666V16h3.333l9.83-9.831L9.83 2.836M13.03 0a.89.89 0 0 0-.623.258l-1.626 1.626 3.333 3.334L15.74 3.59a.885.885 0 0 0 0-1.253L13.66.258A.873.873 0 0 0 13.03 0m-3.2 5.351l.817.818-8.052 8.053h-.817v-.818L9.83 5.351" mask="url(#b)" />
                        </g>
                    </SvgIcon>
                    <TypoCustom texto={values && values.user && values.user.name} size='16px' weight='500' pad='0 0 8px 0' />
                    <TypoCustom texto={values && values.user && values.user.email} size='16px' weight='500' pad='0 0 8px 0' />
                    <TypoCustom texto={values && values.user && values.user.cpf} size='16px' weight='500' pad='0 0 8px 0' />
                </Box>
            </Container>
            <Box sx={{ width: '100vw', height: '76px', bgcolor: '#eee', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', pl: 2 }}>
                <Box>
                    <TypoCustom texto='Endereço cadastrado' cor='#b8b8b8' size='16px' weight='500' pad='0 0 8px 0' />
                </Box>
                <SvgIcon onClick={() => goToEditEnd(navigate)} sx={{ fontSize: '26px', position: 'absolute', right: '20px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g transform="translate(4 4)">
                        <path fill="#000" d="M9.83 2.836L0 12.666V16h3.333l9.83-9.831L9.83 2.836M13.03 0a.89.89 0 0 0-.623.258l-1.626 1.626 3.333 3.334L15.74 3.59a.885.885 0 0 0 0-1.253L13.66.258A.873.873 0 0 0 13.03 0m-3.2 5.351l.817.818-8.052 8.053h-.817v-.818L9.83 5.351" mask="url(#b)" />
                    </g>
                </SvgIcon>
                <Box>
                    <TypoCustom texto={values && values.user && values.user.address} size='16px' weight='500' pad='0 0 8px 0' />
                </Box>
            </Box>
            <Container sx={{ p: 0 }}>

                <TituloDivisor texto='Histórico de pedidos' />
                {history.map((i, index) => {
                    return (
                        <CardHistorico
                            key={index}
                            restaurante={i.restaurantName}
                            total={`SUBTOTAL R$${i.totalPrice.toFixed(2)}`}
                            // data={Date(i.createdAt)}
                        />
                    )
                })}
            </Container>
            <Footer user={true} />
        </Container >
    )
}

export default Perfil