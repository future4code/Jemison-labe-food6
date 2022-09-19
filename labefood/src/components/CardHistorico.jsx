import React from 'react'
import { Card, Typography, CardContent, CardActionArea } from '@mui/material'

const CardHistorico = ({ restaurante, data, total }) => {
    return (
        <Card maxWidth='sm' sx={{ borderRadius: '8px', my: '16px', boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.25)' }}>
            <CardActionArea sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CardContent sx={{ flex: 2, py:'16px'}}>
                    <Typography component='div' fontWeight='500' fontSize='16px' color='#e86e5a' sx={{ pb: '8px' }}>
                        {restaurante}
                    </Typography>
                    <Typography fontSize='12px' paddingBottom='8px'>
                        {data}
                    </Typography>
                    <Typography fontWeight='500' fontSize='16px' >
                        {total}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardHistorico