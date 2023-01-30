import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/Firestore/products";
import { ProdList } from "../components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../styles/ProdConteiner.css";

export const ProdContainer = () => {
  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then((prod) => {
        setProd(prod);
      })
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="conteiner d-flex flex-column justify-content-center h-100 ">
      <h2 className="titulo my-2">
        Welcome to <span className="titulo-color">RealTech</span> !
      </h2>
      <ProdList prod={prod} />
      <ToastContainer />
    </div>
  );
};
