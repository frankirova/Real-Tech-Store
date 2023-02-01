import { CartList } from "../components";

export const CartContainer = () => {
  return (
    <div className="container">
      <h2 className="titulo my-2 text-center">My Cart</h2>
      <div className="vh-100">
        <CartList />
      </div>
    </div>
  );
};
