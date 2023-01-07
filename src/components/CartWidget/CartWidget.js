import React from 'react'
import Modal from '../Modal/Modal'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { authContext } from '../../Context/LoginContext'

const CartWidget = () => {

  const [modalShow, setModalShow] = useState(false);

  const { isLoggedIn } = useContext(authContext)
  const { getQuantity } = useContext(CartContext)
  const totalQuantity = getQuantity()
  return (
    <div>{
      !isLoggedIn ?
        <Link to='/Login'className='cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center'>
          <i className="fa-sharp fa-solid fa-cart-shopping p-1"></i>
          <span>{totalQuantity}</span></Link> :
        <button onClick={() => setModalShow(true)} className='cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center'>
          <i className="fa-sharp fa-solid fa-cart-shopping p-1"></i>
          <span>{totalQuantity}</span>
        </button>
    }
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
    </div>

  )
}

export default CartWidget