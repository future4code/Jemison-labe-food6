import React from 'react'
import { ContainerForms } from '../../components/form/stylesForms'
import logo from './../../img/logo-rappi.png'
import Input from '../../components/form/input'
import { ControlImg, Container, Title, ControlButton,SpanControl } from './styledLogin'

const Login = ({ type, text, name, placeholder, handleOnChange, required, value, }) => {
  return (
    <Container>
      <ContainerForms>
        <ControlImg >
          <img src={logo} alt="Logo-Rappi" />
        </ControlImg >
        <Title>
          <h2>Entrar</h2>
        </Title>
        <form>
          <Input
            type={text}
            name={name}
            placeholder={"email@email.com"}
            required={required}
          />
          <Input
            type={text}
            name={name}
            placeholder={"Mínimo 6 caracteres"}
            required={required}
          />
          <ControlButton>
            <button>Entrar</button>
          </ControlButton>
        </form>
        <SpanControl>
          <span>Não possui cadastro? Clique aqui.</span>
        </SpanControl>






      </ContainerForms>
    </Container>
  )
}

export default Login