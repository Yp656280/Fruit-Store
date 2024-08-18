import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Shopdetail from "./components/Shop/Shopdetail.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import AdminLogin from "./components/Admin/AdminLogin.jsx";
import Admin from "./components/Admin/Admin.jsx";
import AdminSignup from "./components/Admin/AdminSignup.jsx";

import Dashboard from "./components/Admin/Dashboard.jsx";
import Products from "./components/Admin/Products.jsx";
import Category from "./components/Admin/Category.jsx";
import AddItem from "./components/Admin/AddItem.jsx";
import Profile from "./components/Admin/Profile.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />}></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="" element={<App />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/testimonial" element={<Testimonial />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shopdetail" element={<Shopdetail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      </Route>

      <Route path="/admin" element={<Admin />}>
        {" "}
        <Route path="/admin/additem" element={<AddItem />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/products" element={<Products />}></Route>
        <Route path="/admin/category" element={<Category />}></Route>
        <Route path="/admin/profile" element={<Profile />}></Route>
      </Route>
      <Route path="/admin/login" element={<AdminLogin />}></Route>
      <Route path="/admin/signup" element={<AdminSignup />}></Route>
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
