import { getProductsById } from "../services/Firestore/products";
import { useState, useEffect } from "react";

export const useGetProdById = (prodId) => {
  const [prodById, setProdById] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsById(prodId)
      .then((prod) => {
        setProdById(prod);
      })
      .catch((error) => {
        <p>{error}</p>;
      })
      .finally(() => setIsLoading(false));
  }, [prodId]);
  return [prodById, isLoading];
};
