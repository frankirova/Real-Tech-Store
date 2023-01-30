import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../styles/Prod.css";

export const ProdCard = ({ prod }) => {
  return (
    <div className="card ">
      <div>
        <img className="card-img-top" src={prod.img} alt="img"></img>
      </div>
      <h4 className="card-title">{prod.title}</h4>

      <div className="caracteristicas">
        <p className="card-text text-secondary">{prod.ram}</p>
        <p className="card-text text-secondary">{prod.pantalla}</p>
        <p className="card-text text-secondary">{prod.almacenamiento}</p>
        <p className="card-text text-secondary">{prod.procesador}</p>
      </div>
      <b className="m-2">$ {prod.precio}</b>
      <Link className="btn btn-success" to={`/prod/${prod.id}`}>
        Ver detalle
      </Link>
      <ToastContainer />
    </div>
  );
};
