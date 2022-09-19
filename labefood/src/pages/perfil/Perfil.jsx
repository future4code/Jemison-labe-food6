import React from 'react'
import { Box, Container, SvgIcon } from '@mui/material'
import Titulo from '../../components/Titulo'
import TypoCustom from '../../components/TypoCustom'
import TituloDivisor from '../../components/TituloDivisor'
import Footer from '../../components/Footer'
import CardHistorico from '../../components/CardHistorico'
// import useProtectedPage from '../../hooks/useProtectedPage'

const Perfil = () => {
    return (
        <Container sx={{ maxWidth: 'xs', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 8 }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Titulo texto={"Meu Pefil"} />
            </Box>
            <Box sx={{ width: '100vw', borderTop: 1, color: '#DDD' }} />
            <Container sx={{ maxWidth: 'sm', p: 0, mt: '12px' }}>
                <Box sx={{ diplay: 'flex', flexDirection: 'column',mb:'8px' }}>
                    <SvgIcon sx={{ fontSize: '26px', position: 'absolute', right: '20px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <defs>
                            <path id="a" d="M0 0h16v16H0z" />
                        </defs>
                        <g fill="none" fill-rule="evenodd" transform="translate(4 4)">
                            <path fill="#000" d="M9.83 2.836L0 12.666V16h3.333l9.83-9.831L9.83 2.836M13.03 0a.89.89 0 0 0-.623.258l-1.626 1.626 3.333 3.334L15.74 3.59a.885.885 0 0 0 0-1.253L13.66.258A.873.873 0 0 0 13.03 0m-3.2 5.351l.817.818-8.052 8.053h-.817v-.818L9.83 5.351" mask="url(#b)" />
                        </g>
                    </SvgIcon>
                    <TypoCustom texto='Bruna Oliveira' size='16px' weight='500' pad='0 0 8px 0' />
                    <TypoCustom texto='bruna_o@gmail.com' size='16px' weight='500' pad='0 0 8px 0' />
                    <TypoCustom texto='333.333.333-33' size='16px' weight='500' pad='0 0 8px 0' />
                </Box>
            </Container>
            <Box sx={{ width: '100vw', height: '76px', bgcolor: '#eee', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', pl: 2 }}>
                <Box>
                    <TypoCustom texto='Endereço cadastrado' cor='#b8b8b8' size='16px' weight='500' pad='0 0 8px 0' />
                </Box>
                <SvgIcon sx={{ fontSize: '26px', position: 'absolute', right: '20px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <defs>
                        <path id="a" d="M0 0h16v16H0z" />
                    </defs>
                    <g fill="none" fill-rule="evenodd" transform="translate(4 4)">
                        <path fill="#000" d="M9.83 2.836L0 12.666V16h3.333l9.83-9.831L9.83 2.836M13.03 0a.89.89 0 0 0-.623.258l-1.626 1.626 3.333 3.334L15.74 3.59a.885.885 0 0 0 0-1.253L13.66.258A.873.873 0 0 0 13.03 0m-3.2 5.351l.817.818-8.052 8.053h-.817v-.818L9.83 5.351" mask="url(#b)" />
                    </g>
                </SvgIcon>
                <Box>
                    <TypoCustom texto='Rua Alessandra Vieira, 42 - Santana' size='16px' weight='500' pad='0 0 8px 0' />
                </Box>
            </Box>
            <Container sx={{ maxWidth: 'sm', p: 0 }}>

                <TituloDivisor texto='Histórico de pedidos' />
                <CardHistorico
                    restaurante='Bullguer Vila Madalena'
                    data='23 outubro de 2019'
                    total='SUBTOTAL R$67,00'
                />
                <CardHistorico
                    restaurante='Bullguer'
                    data='23 outubro de 2019'
                    total='SUBTOTAL R$67,00'
                />
                <CardHistorico
                    restaurante='Bullguer'
                    data='23 outubro de 2019'
                    total='SUBTOTAL R$67,00'
                />
                <CardHistorico
                    restaurante='Bullguer'
                    data='23 outubro de 2019'
                    total='SUBTOTAL R$67,00'
                />
            </Container>
            <Footer user={true} />
        </Container >
    )
}

export default Perfil