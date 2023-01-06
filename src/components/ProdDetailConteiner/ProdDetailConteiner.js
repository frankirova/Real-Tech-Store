import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProdDetail from '../ProdDetail/ProdDetail'
import ProdDetail2 from '../ProdDetail2'
import { getProductsById } from '../../services/Firestore/products'
import 'react-toastify/dist/ReactToastify.css';


const ProdDetailConteiner = () => {

  const [prodById, setProdById] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { prodId } = useParams()



  useEffect(() => {
    getProductsById(prodId)
      .then(prod => {
        setProdById(prod)
      })
      .finally(() => setIsLoading(false))

  }, [prodId]);

  if (isLoading) return (<h1>Cargando...</h1>)


  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>

      {/* <ProdDetail
        prodById={prodById}
        id={prodById.id}
        categoria={prodById.categoria}
        nombre={prodById.nombre}
        precio={prodById.precio}
        img={prodById.img}
        pantalla={prodById.pantalla}
        almacenamiento={prodById.almacenamiento}
        procesador={prodById.procesador}
        stock={prodById.stock}
      /> */}
      <ProdDetail2
        prodById={prodById}
        id={prodById.id}
        categoria={prodById.categoria}
        nombre={prodById.nombre}
        precio={prodById.precio}
        img={prodById.img}
        pantalla={prodById.pantalla}
        almacenamiento={prodById.almacenamiento}
        procesador={prodById.procesador}
        stock={prodById.stock} />

    </div>
  )
}

export default ProdDetailConteiner