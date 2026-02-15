import "./App.css";
import { Route, Routes } from "react-router-dom";
import Rootlayouts from "./components/layouts/Rootlayouts";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Contacts from "./components/pages/Contacts";
import Error from "./components/pages/Error";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Account from "./components/pages/Account";
import Checkout from "./components/pages/Checkout";
import Cart from "./components/pages/Cart";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
