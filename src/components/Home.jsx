import { Carrousel } from "../components/Carrousel";
import { ProductsInOffer } from "./ProductsInOffer";

export const Home = () => {
  return (
    <main>
      <Carrousel
        imagen1="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80"
        imagen2="https://images.unsplash.com/photo-1622533950960-2ed47209dab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80"
        imagen3="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      />
      <section className="container">
        <h2 className="titulo my-2 text-center">
          HOT <span className="text-success">SALE !</span>
        </h2>
        <ProductsInOffer />
      </section>
    </main>
  );
};
