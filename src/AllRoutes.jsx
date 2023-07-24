import {Route,Routes} from "react-router-dom"
import { Home } from "./Pages/Home"
import { Product } from "./Pages/Product"
import { SingleProduct } from "./Pages/SingleProduct"
import { Login } from "./Pages/Login"
import { PrivateRoute } from "./Components/PrivateRoute"
import { Cart } from "./Pages/Cart"
import {Signup} from "./Pages/Signup"
export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/product" element={<PrivateRoute><Product/></PrivateRoute>}></Route>
            <Route path="/product/:id" element={<PrivateRoute><SingleProduct/></PrivateRoute>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/cart" element={<PrivateRoute><Cart></Cart></PrivateRoute>}></Route>
        </Routes>
    )
}