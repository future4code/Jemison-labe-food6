import React, { useState } from 'react'
import { Box, Button, Dialog, TextField, DialogActions } from '@mui/material'
import TypoCustom from './TypoCustom'

const QuantDialog = ({ isDialogOpened, handleCloseDialog, onChange }) => {

    const [quantity, setQuantity] = useState(0)

    const handleQuantChange = (e) => {
        setQuantity(e.target.value)
        onChange(e.target.value)
    }
    return (
        < Dialog
            open={isDialogOpened}
            onClose={handleCloseDialog}
            sx={{ width: '100%', m: 'auto' }}>
            <Box sx={{ display: 'flex', flexDirection: "column", bgcolor: 'white', px: '20px', py: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', p: '12px' }}>
                    <TypoCustom size='16px' texto='Selecione a quantidade desejada' />
                </Box>
                <TextField 
                    type='number'
                    placeholder='0'
                    value={quantity}
                    fullWidth
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={handleQuantChange}
                    sx={{ px: '16px', pb: '15px' }}
                />
                <DialogActions>
                    <Button
                        onClick={handleCloseDialog}
                        type='submit'
                        color='primary'
                        variant='text'
                        sx={{ fontSize: '16px', fontWeight: '400', textAlign: 'end' }}
                    >Adicionar ao carrinho
                    </Button>
                </DialogActions>
            </Box>
        </Dialog >
    )
}

export default QuantDialog