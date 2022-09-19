import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import ButtonCustom from '../../components/ButtonCustom'
import InputSenha from '../../components/InputSenha'
import Titulo from '../../components/Titulo'
import LogoImg from '../../components/Logo'
import Input from '../../components/Input'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'

const Login = () => {
  const navigate = useNavigate()

  const goToSignUp = (navigate) => { navigate('/signup') }
  const goToFeed = (navigate) => { navigate('/feed') }

  const [values, setValues] = useState({
    password: '',
    email: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  const Log = () => {
    axios.post(`${BASE_URL}/login`, {
      "email": values.email,
      "password": values.password
    })
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        if(!res.data.user.hasAddress){
          navigate('/cadastroEndereco')
        } else {
          goToFeed(navigate)
        }
      }).catch((error) => {
        console.log(error.response.data.message)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Log()
  }

  useEffect(() => {
    Log()
  }, [])

  return (
    <Container maxWidth='lg' sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 8 }}>
      <LogoImg />
      <Titulo texto="Entrar" />
      <Box onSubmit={handleSubmit} component='form' noValidate autoComplete="off" sx={{ width: '100%' }} >
        <Input
          value={values.email}
          label='E-mail'
          placeholder='email@email.com'
          onChange={handleChange('email')}
        />
        <InputSenha
          label='Senha'
          placeholder='Mínimo 6 caracteres'
          onChange={handleChange('password')}
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          testeee={values.showPassword ? <VisibilityOff /> : <Visibility />}
        />
        <ButtonCustom type='submit' value={'Entrar'} texto='Entrar' />
      </Box>
      <Titulo onClick={() => goToSignUp(navigate)} link={"Não possui cadastro? Clique aqui"} />
    </Container>
  )
}

export default Login