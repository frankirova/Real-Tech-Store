import React from 'react'
import Modal from '../Modal/Modal'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import './CartWidget.css'

const CartWidget = () => {

  const [modalShow, setModalShow] = useState(false);


  const { getQuantity } = useContext(CartContext)
  const totalQuantity = getQuantity()
  return (
    <div>
      <button onClick={() => setModalShow(true)} className='cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center'>
        <i className="fa-sharp fa-solid fa-cart-shopping p-1"></i>
        <span>{totalQuantity}</span>
      </button>
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
    </div>

  )
}

export default CartWidget