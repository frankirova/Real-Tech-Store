import { createContext, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prodToAdd) => {
    if (!isInCart(prodToAdd.id)) {
      setCart([...cart, prodToAdd]);
      notifyAddedToCart();
    }
  };

  const notifyAddedToCart = () => {
    toast.success("🦄 Added to cart!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const getQuantity = () => {
    let acc = 0;

    cart.forEach((prod) => {
      acc += prod.quantity;
    });

    return acc;
  };

  const getTotal = () => {
    let acc = 0;
    cart.forEach((prod) => {
      acc += prod.quantity * prod.precio;
    });

    return acc;
  };

  const removeItem = (id) => {
    const updateCart = cart.filter((prod) => prod.id !== id);
    setCart(updateCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        getQuantity,
        getTotal,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
