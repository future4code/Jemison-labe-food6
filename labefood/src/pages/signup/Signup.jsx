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
import { validateEmail, validateName, validateCpf } from './../../services/Regex'

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
  const [emailErr, setEmailErr] = useState(false)
  const [emailOk, setEmailOk] = useState('')
  const [nameErr, setNameErr] = useState(false)
  const [nameOk, setNameOk] = useState('')
  const [cpfErr, setCpfError] = useState(false)
  const [cpfOk, setCpfOk] = useState('')

  const validate = () => {
    if (!validateEmail.test(values.email)) {
      setEmailErr(true)
      setEmailOk('Insira um e-mail valido!')
    } else {
      setEmailErr(false)
    } if (!validateName.test(values.name)) {
      setNameErr(true)
      setNameOk('Insrira um nome e sobrenome.')
    } else {
      setNameErr(false)
    } if (!validateCpf.test(values.cpf)) {
      setCpfError(true)
      setCpfOk('Insrira um cpf valido.')
    } else {
      setCpfError(false)
    }
  }

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
        if (!response.data.user.hasAddress) {
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
          error={nameErr}
          value={values.name}
          label='Nome'
          placeholder='Nome e sobrenome'
          onChange={handleChange('nome')}
          helperText={nameErr ? nameOk : ''}
        />
        <Input
          error={emailErr}
          value={values.email}
          label='E-mail'
          placeholder='email@email.com'
          onChange={handleChange('email')}
          helperText={emailErr ? emailOk : ''}
        />
        {emailErr && <p>Insira um e-mail valido!</p>}
        <Input
          error={cpfErr}
          value={values.cpf}
          label='CPF'
          placeholder='000.000.000-00'
          onChange={handleChange('cpf')}
          helperText={cpfErr ? cpfOk : ''}
        />
        {cpfErr &&  <p>Insira um CPF valido!</p>}
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
        <ButtonCustom onClick={() => validate()} type='submit' texto='Criar' />
      </Box>
    </Container>
  )

}

export default Signup 