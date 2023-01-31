import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/Firestore/products";
export const ProdContext = createContext({});

export const ProdProvider = ({ children }) => {
  const [prod, setProd] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId).then((prod) => {
      setProd(prod);
    });
  }, [categoryId]);
  return (
    <ProdContext.Provider value={{ prod }}>{children}</ProdContext.Provider>
  );
};
