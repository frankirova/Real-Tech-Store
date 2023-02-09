import { createContext } from "react";
import { useParams } from "react-router-dom";
import { useGetProds } from "../Hooks/useGetProducts";
export const ProductContext = createContext({});
export const ProductProvider = ({ children }) => {
  const { categoryId } = useParams();
  const [prod, isLoading] = useGetProds(categoryId);

  return (
    <ProductContext.Provider
      value={{
        prod,
        isLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
