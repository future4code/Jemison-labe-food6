import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Stack } from '@mui/system'

const CardFeed = ({ storeName, deliveryTime, fee, imgCard, onClick }) => {
    return (
        <Card sx={{ maxWidth: '100%', width: '100%', my: 1, borderRadius:'8px', boxShadow:'0px 1px 2px 1px rgba(0,0,0,0.25)' }}>
            <CardActionArea onClick={onClick}>
                <CardMedia component="img" height="120" image={imgCard} alt="burger" />
                <CardContent sx={{p:1}}>
                    <Typography component='div' fontSize='16px' fontWeight='500' color='#e86e5a' gutterBottom>
                        {storeName}
                    </Typography>
                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant='body2' color='#b8b8b8' fontSize='16px'>
                            {`${deliveryTime} min`}
                        </Typography>
                        <Typography variant='body2' color='#b8b8b8' fontSize='16px'>
                            {`Frete R$${fee},00`}
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardFeed