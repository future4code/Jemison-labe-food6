import React from 'react'
import { Box, Typography } from '@mui/material'

const TituloDivisor = ({ texto, pad}) => {
    return (
        <Box sx={{ width: '100%', mt:6, mb:2 }} >
            <Typography fontSize='16px' color='#000' fontWeight='500' lineHeight='1.15' padding={pad} sx={{ letterSpacing: -0.4 }}>
                {texto}
            </Typography>
            <Box sx={{ m:'8px 0 8px 0', width: '100%', borderTop: 2, color: '#222' }} />
        </Box>
    )
}

export default TituloDivisor