import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import LogoImg from '../../components/Logo'
import Titulo from '../../components/Titulo'
import Input from '../../components/Input'
import InputSenha from '../../components/InputSenha'
import ButtonCustom from '../../components/ButtonCustom'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState({
    nome: '',
    email: '',
    cpf: '',
    password: '',
    confirm: '',
    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const cadastro = () => {
    axios.post(`${BASE_URL}/signup`, {
      "name": values.nome,
      "email": values.email,
      "cpf": values.cpf,
      "password": values.password
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        if(!response.data.user.hasAddress){
          navigate('/cadastroEndereco')
        }
      }).catch((error) => {
        console.log(error.response.data.message)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    cadastro()
  }

  useEffect(() => {
    cadastro()
  }, [])

  console.log(values.nome, values.email, values.cpf, values.password, values.confirm)

  return (
    <Container maxWidth='sm' sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 8 }}>
      <Box sx={{ mb: 1, width: '100vw', borderTop: 1, color: '#DDD' }} />
      <LogoImg />
      <Titulo texto="Cadastrar" />
      <Box onSubmit={handleSubmit} component='form' noValidate autoComplete="off" sx={{ width: '100%' }} >
        <Input
          value={values.name}
          label='Nome'
          placeholder='Nome e sobrenome'
          onChange={handleChange('nome')}
        />
        <Input
          value={values.email}
          label='E-mail'
          placeholder='email@email.com'
          onChange={handleChange('email')}
        />
        <Input
          value={values.cpf}
          label='CPF'
          placeholder='000.000.000-00'
          onChange={handleChange('cpf')}
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
        <InputSenha
          label='Confirmar'
          placeholder='Confirme a senha anterior'
          onChange={handleChange('confirm')}
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          type={values.showPassword ? 'text' : 'password'}
          value={values.confirm}
          testeee={values.showPassword ? <VisibilityOff /> : <Visibility />}
        />
        <ButtonCustom type='submit' texto='Criar' />
      </Box>
    </Container>
  )
}

export default Signup