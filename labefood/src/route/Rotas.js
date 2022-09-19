import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Feed from '../pages/feed/Feed'
import CadastroEndereco from '../pages/cadastroEndereco/CadastroEndereco'
import Carrinho from '../pages/carrinho/Carrinho'
import PedidoAndamento from '../pages/pedidoAndamento/PedidoAndamento'
import Restaurante from '../pages/restaurante/Restaurante'
import Perfil from '../pages/perfil/Perfil'
import EditPerfil from '../pages/editPerfil/EditPerfil'
import EditEndereco from '../pages/editEndereco/EditEndereco'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/cadastroEndereco' element={<CadastroEndereco />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/pedidoAndamento' element={<PedidoAndamento />} />
        <Route path='/restaurante/:id' element={<Restaurante />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/editPerfil' element={<EditPerfil />} />
        <Route path='/editEndereco' element={<EditEndereco />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas