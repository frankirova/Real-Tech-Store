import { getProducts } from "../services/Firestore/products";
import { useState, useEffect } from "react";
export const useGetProds = (categoryId) => {
  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts(categoryId)
      .then((prod) => {
        setProd(prod);
      })
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  return [prod, isLoading];
};