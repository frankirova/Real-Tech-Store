import { CartList } from "../components";

export const CartContainer = () => {
  return (
    <div>
      <h2 className="titulo my-2">My Cart</h2>
      <div className="vh-100">
        <CartList />
      </div>
    </div>
  );
};
