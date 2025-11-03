import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllProduct from "../Pages/AllProduct";
import CardDetails from "../Components/CardDetails/CardDetails";


export const router = createBrowserRouter([
    {
        path : "/" ,
        Component : Root,
        children :[
            {index : true , Component :Home},
            {path: '/login' , Component :Login },
            {path : '/register' , Component :Register },
            {path : '/allproduct',Component : AllProduct} ,
            {path : '/details/:id',Component : CardDetails}
        ]
    }
])