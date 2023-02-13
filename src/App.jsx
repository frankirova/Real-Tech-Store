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
  Contact,
  Home,
} from "../src/components";
import { UsersManagger } from "./components/UsersManagger";

import "./App.css";

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
                  <Route path="/users" element={<UsersManagger />} />
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
