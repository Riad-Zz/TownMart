import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllProduct from "../Pages/AllProduct";
import CardDetails from "../Components/CardDetails/CardDetails";
import PrivateRoutes from "../Provider/PrivateRoutes/PrivateRoutes";
import MyBids from "../Pages/MyBids";
import MyProduct from "../Pages/MyProduct";
import CreateProduct from "../Pages/CreateProduct";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: '/login', Component: Login },
            { path: '/register', Component: Register },
            { path: '/allproduct', 
                Component: AllProduct , 
                loader :()=> fetch('http://localhost:3000/product') 
            },
            {
                path: '/details/:id',
                element : <PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:3000/product/${params.id}`)
            },
            {
                path : '/mybids/:email' ,
                element : <PrivateRoutes><MyBids></MyBids></PrivateRoutes> ,
            },
            {
                path : '/myproduct/:email' ,
                element : <PrivateRoutes><MyProduct></MyProduct></PrivateRoutes> ,
                loader : ({params}) => fetch(`http://localhost:3000/product/?email=${params.email}`)
            }
            ,
            {
                path : '/createproduct',
                element : <PrivateRoutes><CreateProduct></CreateProduct></PrivateRoutes>
            }
        ]
    }
])