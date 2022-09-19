import React from 'react'
import { Box, List, ListItem, Button } from '@mui/material'

const HorizontalList = ({ onClick }) => {
    return (
        <Box sx={{ width: '100%', maxWidth: '360px' }}>
            <List disablePadding sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto','&::-webkit-scrollbar': { display: 'none' } }}>
                <ListItem disablePadding sx={{pr:'12px'}}>
                    <Button onClick={onClick} value={'Árabe'} sx={{ fontSize: '14px', color: 'black', p:0, m:0}}>Árabe</Button>
                </ListItem>
                <ListItem disablePadding sx={{pr:'12px'}}>
                    <Button onClick={onClick} value={'Asiática'} sx={{ fontSize: '14px', color: 'black' }}>Asiática</Button>
                </ListItem>
                <ListItem disablePadding sx={{pr:'12px'}}>
                    <Button onClick={onClick} value={'Hamburguer'} sx={{ fontSize: '14px', color: 'black' }}>Hamburguer</Button>
                </ListItem>
                <ListItem disablePadding sx={{pr:'12px'}}>
                    <Button onClick={onClick} value={'Italiana'} sx={{ fontSize: '14px', color: 'black' }}>Italiana</Button>
                </ListItem>
                <ListItem disablePadding sx={{pr:'12px'}}>
                    <Button onClick={onClick} value={'Sorvetes'} sx={{ fontSize: '14px', color: 'black' }}>Sorvetes</Button>
                </ListItem>
                <ListItem disablePadding sx={{pr:'12px'}}>
                    <Button onClick={onClick} value={'Carnes'} sx={{ fontSize: '14px', color: 'black' }}>Carnes</Button>
                </ListItem>
                <ListItem disablePadding sx={{pr:'12px'}}>
                    <Button onClick={onClick} value={'Baiana'} sx={{ fontSize: '14px', color: 'black' }}>Baiana</Button>
                </ListItem>
                <ListItem disablePadding sx={{pr:'12px'}}>
                    <Button onClick={onClick} value={'Petiscos'} sx={{ fontSize: '14px', color: 'black' }}>Petiscos</Button>
                </ListItem>
                <ListItem disablePadding sx={{pr:'12px'}}>
                    <Button onClick={onClick} value={'Mexicana'} sx={{ fontSize: '14px', color: 'black' }}>Mexicana</Button>
                </ListItem>
            </List>
        </Box>
    )
}

export default HorizontalList