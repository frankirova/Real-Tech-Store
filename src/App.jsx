import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./Context/CartContext";
import AuthProvider from "./Context/LoginContext";
import { ProductProvider } from "./Context/ProdContext";
import {
  Register,
  Login,
  NavBar,
  ProdContainer,
  Checkout,
  Footer,
  ChangePass,
  ProdDetailContainer,
  CartContainer,
  Contact
} from "../src/components";

import "./App.css";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <ChakraProvider>
              <BrowserRouter>
                <NavBar />
                <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/" element={<Home />} />
                  <Route
                    path="category/:categoryId"
                    element={<ProdContainer />}
                  />
                  <Route
                    path="prod/:prodId"
                    element={<ProdDetailContainer />}
                  />
                  <Route path="cart" element={<CartContainer />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="/changePass" element={<ChangePass />} />
                  <Route path="/contact" element={<Contact />} />

                </Routes>
                <Footer />
              </BrowserRouter>
            </ChakraProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
