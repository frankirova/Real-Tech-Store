import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "../Context/ProdContext";
import { ProdDetail, Spinner } from "../components";

import "react-toastify/dist/ReactToastify.css";

export const ProdDetailContainer = () => {
  const { prodId } = useParams();
  const { prod, isLoading } = useContext(ProductContext);
  const productsFilterById = prod
    .filter((prod) => prod.id === prodId)
    .map((prod) => prod);

  if (isLoading) return <Spinner />;

  return (
    <main className="container">
      <h2 className="titulo my-2 text-center">Detalle</h2>
      <section className="container d-flex justify-content-center align-items-center h-100">
        <ProdDetail prodFilterById={productsFilterById[0]} />
      </section>
    </main>
  );
};
