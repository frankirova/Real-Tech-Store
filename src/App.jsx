import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./Context/CartContext";
import AuthProvider from "./Context/LoginContext";
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
} from "../src/components";

import "./App.css";
import { ProdProvider } from "./Context/ProdContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <ProdProvider>
            <ChakraProvider>
              <BrowserRouter>
                <NavBar />
                <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/" element={<ProdContainer />} />
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
                  {/* <Route path='/send' element={<ContactUs />} /> */}
                  <Route path="/changePass" element={<ChangePass />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </ChakraProvider>
          </ProdProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
