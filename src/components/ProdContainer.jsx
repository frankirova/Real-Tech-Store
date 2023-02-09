import { useParams } from "react-router-dom";
import { useGetProds } from "../Hooks/useGetProducts";
import { ProdList, Spinner } from "../components";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ProdConteiner.css";
import { ProductContext } from "../Context/ProdContext";

export const ProdContainer = () => {
  const { categoryId } = useParams();

  const { prod, isLoading } = useContext(ProductContext);

  const productsFilterByCategory = prod
    .filter((prod) => prod.categoria == categoryId)
    .map((prod) => prod);
    // console.log(productsFilterByCategory)

  if (!prod) return <p>Error, recargue la pagina o intente mas tarde.</p>;
  if (isLoading) return <Spinner />;
  return (
    <main className="container d-flex flex-column justify-content-center h-100 ">
      <h2 className="titulo my-2 text-center">
        Category:<span className="text-success"> {categoryId} </span> !
      </h2>
      <ProdList prods={productsFilterByCategory} />
    </main>
  );
};
