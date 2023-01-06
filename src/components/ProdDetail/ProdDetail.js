import React from 'react'
import './ProdDetail.css'
import Count from '../Count/Count'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProdDetail = ( { prodById, id, categoria, precio, nombre, almacenamiento, ram, procesador, pantalla, img, stock} ) => {
  const { addToCart, isInCart } = useContext(CartContext)

  const addTo = (quantity) => {

    addToCart({ id, img, categoria, precio, nombre, quantity })
  }
  // const notifySucces = () => {
  //   toast.success('🦄 Added to cart!', {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //     });
  // }
  return (
  <div>

    <div className="card">

      <div className="card-img-top">
        <img src={img} alt="img"></img>
      </div>

      <h4 className="card-title">{nombre}</h4>
    
      <div className="caracteristicas">
        <p className="card-text text-secondary">{ram}</p>
        <p className="card-text text-secondary">{pantalla}</p>
        <p className="card-text text-secondary">{almacenamiento}</p>
        <p className="card-text text-secondary">{procesador}</p>
      </div>

      <p className='price'><b>$ {precio}</b></p>

    </div>

      <div className='count-component d-flex align-items-center justify-content-center'>
        {
          
          isInCart(id)  ? <Link to='/cart' className='btn btn-success mx-2 my-auto'>Confirmar</Link>
          :stock > 0 ? <Count prod={prodById} addTo={addTo} /> 
          : <h1>Sin Stock</h1>  
        }        
        <ToastContainer />
      </div>

    </div>
  )
}
export default ProdDetail