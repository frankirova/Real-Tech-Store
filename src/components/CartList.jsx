import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";

import "../styles/CartList.css";

export const CartList = () => {
  const { cart, getTotal, removeItem, clearCart } = useContext(CartContext);
  const total = getTotal();
  return (
    <>
      {cart.map((prod) => (
        <div key={prod.id}>
          <div className="item">
            <img className="carrito-img" src={prod.img} alt={prod.nombre}></img>
            <p className="card-text">{prod.nombre}</p>
            <p className="card-text">
              Cantidad: <span id="cantidad">{prod.quantity}</span>
            </p>
            <button
              className="btn"
              onClick={() => {
                removeItem(prod.id);
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      ))}
      <h3 className="m-2">
        Total: <b>${total}</b>
      </h3>
      <div className="d-flex align-items-start justify-content-center">
        <Button className="btn btn-danger m-1" onClick={clearCart}>
          <i class="fa-solid fa-trash"></i>
        </Button>
        <Link className="btn btn-success m-1" to="/checkout">
          Go Checkout
        </Link>
      </div>
    </>
  );
};
