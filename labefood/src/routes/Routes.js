import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'

function Routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='' element={'#'}/>
            <Route path='' element={'#'}/>
            <Route path='' element={'#'}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routes