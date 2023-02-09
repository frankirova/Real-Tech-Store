import { useParams } from "react-router-dom";
import { ProdDetail, Spinner } from "../components";

import { useGetProdById } from "../Hooks/useGetProducts";
import "react-toastify/dist/ReactToastify.css";

export const ProdDetailContainer = () => {
  const { prodId } = useParams();
  const [prodById, isLoading] = useGetProdById(prodId);

  if (isLoading) return <Spinner />;
  return (
    <main className="container">
      <h2 className="titulo my-2 text-center">Detalle</h2>
      <section className="container d-flex justify-content-center align-items-center h-100">
        <ProdDetail
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
        />
      </section>
    </main>
  );
};
