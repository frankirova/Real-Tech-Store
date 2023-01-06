import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import ProdList from '../ProdListConteiner/ProdList'

import './ProdConteiner.css'
import 'react-toastify/dist/ReactToastify.css';

import { getProducts } from '../../services/Firestore/products'
import { useContext } from 'react'
import { authContext } from '../../Context/LoginContext'

const ProdConteiner = () => {

  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(authContext)
  const { categoryId } = useParams()

  useEffect(() => {

    getProducts(categoryId)
      .then(prod => {
        setProd(prod)
      })
      .finally(() => setIsLoading(false))

  }, [categoryId])

  if (isLoading) return (<h1>Cargando...</h1>)
  if (!isLoggedIn) return (
    <div className='container w-50 vh-100 d-flex flex-column align-items-center justify-content-center'>
      <h2 className='fs-3 m-5'>Iniciar sesion o registrate</h2>
      <Link to='/Login' className='btn btn-success w-50 m-2'>Log in</Link>
      <Link to='/Register' className='btn btn-success w-50 m-2'>Sign up</Link>

    </div>
  )

  return (
    <div className='conteiner d-flex flex-column justify-content-center h-100 '>
      <h2 className='titulo my-2'>Bienvenidos a <span className='titulo-color'>RealTech</span> !</h2>
      <ProdList prod={prod} />
      <Link to='/send' className='btn btn-success'>ea</Link>

    </div>
  )
}
export default ProdConteiner