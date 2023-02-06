import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

import "../styles/Modal.css";

export const ModalCart = (props) => {
  const { cart, getTotal, removeItem, clearCart } = useContext(CartContext);
  const total = getTotal();

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">My cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {cart.map((prod) => (
            <article className="item-modal" key={prod.id}>
              <Row className="align-items-center">
                <Col xs={6} md={4}>
                  <img
                    className="carrito-img-modal"
                    src={prod.img}
                    alt="img"
                  ></img>
                </Col>
                <Col xs={3} md={2}>
                  <p className="card-text text-center">{prod.marca}</p>
                </Col>
                <Col xs={3} md={2}>
                  <div className="cantidad-btn-eliminar">
                    <p className="card-text text-center">
                      Cantidad: <span id="cantidad">{prod.quantity}</span>
                    </p>
                    <button
                      className="btn "
                      onClick={() => {
                        removeItem(prod.id);
                      }}
                    >
                      <i class="fa-solid fa-xmark"></i>{" "}
                    </button>
                  </div>
                </Col>
              </Row>
            </article>
          ))}
        </Container>
      </Modal.Body>
      <footer className="d-flex justify-content-around">
        <h3 className="m-2">
          Total: <b>${total}</b>
        </h3>

        <Button className="btn btn-danger m-1" onClick={clearCart}>
          <i class="fa-solid fa-trash"></i>
        </Button>
        <Button className="btn btn-success m-1" onClick={props.onHide}>
          Close
        </Button>
        <Link className="btn btn-success m-1" to="/cart" onClick={props.onHide}>
          Buy !
        </Link>
      </footer>
    </Modal>
  );
};
