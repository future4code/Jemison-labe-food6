import React from 'react'
import { Box, Typography } from '@mui/material'
import Link from '@mui/material/Link';

const Titulo = ({ texto, link, colorText, align, onClick }) => {
    return (
        <Box sx={{ width: '100%', height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Typography onClick={onClick} textAlign={align} fontSize={16} fontWeight='bold' color={colorText} sx={{ letterSpacing: -0.4 }}>
                {link ? <Link underline='none' color='inherit' href="#" >{link}</Link> : texto}
            </Typography>
        </Box>
    )
}

export default Titulo