import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

import './CartList.css'

const CartList = () => {
    const { cart, getTotal, removeItem } = useContext(CartContext)
    const total = getTotal()
    return (
        <div>
            {
                cart.map(prod => (

                    <div key={prod.id}>
                        <div className='item'>
                            <img className="carrito-img" src={prod.img} alt={prod.nombre}></img>
                            <p className="card-text">{prod.nombre}</p>
                            <p className="card-text">Cantidad: <span id="cantidad">{prod.quantity}</span></p>
                            <button className='btn btn-success' onClick={() => { removeItem(prod.id) }}>
                                X
                            </button>
                        </div>
                    </div>
                ))
            }
            <h3 className='m-2'>Total: ${total}</h3>
            <div>
                <Link className='btn btn-success' to='/checkout'>Terminar Orden</Link>
            </div>
        </div>
    )
}

export default CartList