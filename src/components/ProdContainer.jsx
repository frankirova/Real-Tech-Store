import { useParams } from "react-router-dom";
import { useGetProds } from "../Hooks/useGetProd";
import { ToastContainer } from "react-toastify";
import { ProdList, Spinner } from "../components";

import "react-toastify/dist/ReactToastify.css";
import "../styles/ProdConteiner.css";

export const ProdContainer = () => {
  const { categoryId } = useParams();

  const [prods, isLoading] = useGetProds(categoryId);

  if (isLoading) return <Spinner />;
  return (
    <div className="container d-flex flex-column justify-content-center h-100 ">
      <h2 className="titulo my-2">
        Welcome to <span className="titulo-color">RealTech</span> !
      </h2>
      <ProdList prods={prods} />
      <ToastContainer />
    </div>
  );
};
