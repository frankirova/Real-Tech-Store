import { CartList } from "../components";

export const CartContainer = () => {
  return (
    <main className="container">
      <h2 className="titulo my-2 text-center">My Cart</h2>
      <section className="vh-100">
        <CartList />
      </section>
    </main>
  );
};
