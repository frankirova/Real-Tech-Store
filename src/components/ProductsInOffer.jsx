import { useContext } from "react";
import { ProductContext } from "../Context/ProdContext";
import { CardProd, Spinner } from "../components";

export const ProductsInOffer = () => {
  const { prod, isLoading } = useContext(ProductContext);
  if (isLoading) return <Spinner />;

  return (
    <section className="row align-items-center justify-content-center">
      {prod
        .filter((prod) => prod.off != 0)
        .map((prod) => (
          <article className="col-md-4">
            <CardProd prod={prod} />
          </article>
        ))}
    </section>
  );
};
