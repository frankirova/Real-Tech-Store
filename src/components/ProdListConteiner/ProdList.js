import './ProdList.css'
import React from 'react'
import Card from '../Card'
import Cardd from '../Card'
// import { useState, useEfect } from 'react'

const ProdList = ({prod}) => {

  return (
    <div >
      
        <div className="row align-items-center justify-content-center"> 
          { 
            prod.map(prod =>(
            
              <div className="col-md-4" key={prod.id}>
                <Cardd className='card' prod={prod}/>
              </div>
            ))
          }
        </div>
      </div>
           
  )
}

export default ProdList