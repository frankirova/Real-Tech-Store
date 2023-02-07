import { CardProd } from "../components";

import "../styles/ProdList.css";

export const ProdList = ({ prods }) => {
  return (
    <section className="row align-items-center justify-content-center">
      {prods.map((prod) => (
        <article className="col-md-4" key={prod.id}>
          <CardProd className="card" prod={prod} />
        </article>
      ))}
    </section>
  );
};
