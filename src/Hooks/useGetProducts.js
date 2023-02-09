import { getProducts, getProductsById } from "../services/Firestore/products";
import { useState, useEffect, useMemo } from "react";
export const useGetProds = (categoryId) => {
  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts(categoryId)
      .then((prod) => {
        setProd(prod);
      })
      .catch((error) => {
        <p>{error}</p>;
      })
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  return [prod, isLoading];
};
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

export const useGetProdsOnOff = (categoryId) => {
  const [prod] = useGetProds(categoryId);

  const buffer = new Set();
  const enDesc = useMemo(() => {
    prod.map((prod) => {
      buffer.add(prod.off);
    });
    return Array.from(buffer);
  }, [prod]);
  return [enDesc, prod]
};
