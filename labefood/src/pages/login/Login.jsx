import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ContainerForms } from '../../components/form/stylesForms'
import { BASE_URL } from './../../constants/BASE_URL'
import logo from './../../img/logo-rappi.png'
import Input from '../../components/form/input'
import { useForm } from '../../hooks/useForm'
import useProtectedPage from '../../hooks/useProtectedPage'
import { ControlImg, Container, Title, ControlButton, SpanControl } from './styledLogin'





const Login = ({ type, text, name, placeholder, onChange, required, value, }) => {
  useProtectedPage();

  const navigate = useNavigate();

  const goToFeed = () => {
    navigate('/feed')
  }

  const goToSignup = () => {
    navigate('/signup')
  }

  const [body, handleOnChange, clear] = useForm({ email: "", password: "" })

  const loginOk = (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        goToFeed()
        clear();
      }).catch((error) => {
        console.log("Deu ruim!", error.response.data.message)
        alert(error.response.data.message);
      })

  }

  return (
    <Container>
      <ContainerForms>
        <ControlImg >
          <img src={logo} alt="Logo-Rappi" />
        </ControlImg >
        <Title>
          <h2>Entrar</h2>
        </Title>
        <form onSubmit={loginOk}>
          <Input
            type='email'
            id='email'
            name='email'
            value={body.email}
            onChange={handleOnChange}
            placeholder={"email@email.com"}
            required={required}
          />
          <Input
            type='password'
            value={body.password}
            name='password'
            id='password'
            onChange={handleOnChange}
            placeholder={"Mínimo 6 caracteres"}
            required={required}

          />
          <ControlButton>
            <button onClick={loginOk}>Entrar</button>
          </ControlButton>
        </form>
        <SpanControl>
          <span onClick={goToSignup}>Não possui cadastro? Clique aqui.</span>
        </SpanControl>






      </ContainerForms>
    </Container>
  )
}

export default Login