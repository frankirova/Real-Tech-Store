import { useMemo } from "react";
import { useGetProds } from "./useGetProducts";

export const useGetCategories = (categoryId) => {
  const [prod] = useGetProds(categoryId);

  const buffer = new Set();
  const categories = useMemo(() => {
    prod.map((prod) => {
      buffer.add(prod.categoria);
    });
    return Array.from(buffer);
  }, [prod]);
  return [categories]
};
