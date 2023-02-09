import { useContext } from "react";
import { ProductContext } from "../Context/ProdContext";
import { CardProd } from "./Card";

export const ProductsInOffer = () => {
  const { prod } = useContext(ProductContext);

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
