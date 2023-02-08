import { useParams } from "react-router-dom";
import { useGetProds } from "../Hooks/useGetProd";
import { ProdList, Spinner } from "../components";

import "react-toastify/dist/ReactToastify.css";
import "../styles/ProdConteiner.css";

export const ProdContainer = () => {
  const { categoryId } = useParams();

  const [prod, isLoading] = useGetProds(categoryId);
  if (!prod) return <p>Error, recargue la pagina o intente mas tarde.</p>;
  if (isLoading) return <Spinner />;
  return (
    <main className="container d-flex flex-column justify-content-center h-100 ">
      <h2 className="titulo my-2 text-center">
        Welcome to <span className="text-success">RealTech</span> !
      </h2>
      <ProdList prods={prod} />
    </main>
  );
};
