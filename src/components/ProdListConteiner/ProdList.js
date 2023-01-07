import './ProdList.css'
import React from 'react'
import Card from '../Card'

const ProdList = ({ prod }) => {
  return (
    <div >
      <div className="row align-items-center justify-content-center">
        {
          prod.map(prod => (

            <div className="col-md-4" key={prod.id}>
              <Card className='card' prod={prod} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProdList