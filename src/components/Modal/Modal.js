import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom'

import './Modal.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';


const MydModalWithGrid = (props) => {

  const { cart, getTotal, removeItem } = useContext(CartContext)
  const total = getTotal()


  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container >

          {
            cart.map(prod => (

              <div className='item-modal' key={prod.id}>
                <Row className='align-items-center'>
                  <Col xs={6} md={4}>
                    <img className='carrito-img-modal' src={prod.img} alt="img"></img>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className="card-text text-center">{prod.marca}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className='cantidad-btn-eliminar'>
                      <p className="card-text text-center">Cantidad: <span id="cantidad">{prod.quantity}</span></p>
                      <button className='btn btn-success ' onClick={() => { removeItem(prod.id) }}>
                        X
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            ))

          }
        </Container>
      </Modal.Body>
      <footer className='d-flex justify-content-around'>
        <h3 className='m-2'>Total: ${total}</h3>

        <Button className='btn btn-success m-1' onClick={props.onHide}>Close</Button>
        <Link className='btn btn-success m-1' to='/cart' onClick={props.onHide}>Buy !</Link>
      </footer>
    </Modal>
  );
}


export default MydModalWithGrid