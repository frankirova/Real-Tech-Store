import { CardProd } from "../components";

import "../styles/ProdList.css";

export const ProdList = ({ prod }) => {
  return (
    <div>
      <div className="row align-items-center justify-content-center">
        {prod.map((prod) => (
          <div className="col-md-4" key={prod.id}>
            <CardProd className="card" prod={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};
