import React, {useState} from 'react'
import GlobalContext from './GlobalContext'

const GlobalState = (props) => {

    const [cart, setCart] = useState([])
    const [data, setData] = useState([])
    const [pedido, setPedido] = useState([])
    const [popup, setPopup] = useState({})

    console.log(popup)

    const states = {
        cart, 
        setCart,
        data, 
        setData,
        pedido, 
        setPedido,
        popup, 
        setPopup
    }

    return (
        <GlobalContext.Provider value={states}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default GlobalState;