import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

import { CartProvider } from './Context/CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login'
// import  ContactUs  from './components/mail';
import NavBar from './components/Navbar/Navbar';
import ProdConteiner from './components/ProdConteiner/ProdConteiner';
import ProdDetailConteiner from './components/ProdDetailConteiner/ProdDetailConteiner';
import CartConteiner from './components/CartConteiner/CartConteiner';
import Chekout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer';
import AuthProvider from './Context/LoginContext';
import ChangePass from './components/UserView/ChangePass';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <ChakraProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/' element={<ProdConteiner />} />
                <Route path='category/:categoryId' element={<ProdConteiner />} />
                <Route path='prod/:prodId' element={<ProdDetailConteiner />} />
                <Route path='cart' element={<CartConteiner />} />
                <Route path='checkout' element={<Chekout />} />
                {/* <Route path='/send' element={<ContactUs />} /> */}
                <Route path='/changePass' element={<ChangePass />} />

              </Routes>
              <Footer />
            </BrowserRouter>
          </ChakraProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
