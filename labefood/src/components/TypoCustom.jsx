import React from 'react'
import { Typography } from '@mui/material'

const TypoCustom = ({texto, cor, size, weight, pad}) => {
    return (
        <Typography fontSize={size} color={cor} fontWeight={weight} lineHeight='1.15' padding={pad} sx={{ letterSpacing: -0.4, pb:1 }}>
            {texto}
        </Typography>
    )
}

export default TypoCustom