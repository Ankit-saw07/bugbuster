import { Route, Routes } from "react-router-dom";
import {Home} from "./Pages/Home"
import {Products} from "./Pages/Products";
import {Men} from "./Pages/Men";
import {Women} from "./Pages/Women"
import {Kid} from "./Pages/Kid"
import { SingleProduct } from "./Pages/SingleProduct";
import { Login } from "./Pages/Login";
import { PrivateRoute } from "./Components/PrivateRoute";
import { Cart } from "./Pages/Cart";
import { Signup } from "./Pages/Signup";
import {  AdminLogin } from "./Pages/AdminLogin";
import { AdminPage } from "./Pages/AdminPage";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/Men" element={<Men />}></Route>
      <Route path="/Women" element={<Women />}></Route>
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/Kid" element={<Kid />}></Route>
      <Route path="/Adminlogin" element={<AdminLogin/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/Adminpage" element={<AdminPage/>}></Route>
      <Route
        path="/product/:id"
        element={
          <PrivateRoute>
            {/* <SingleProduct /> */}
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};
