import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";


export const router = createBrowserRouter([
    {
        path : "/" ,
        Component : Root,
        children :[
            {index : true , Component :Home},
            {path: '/login' , Component :Login }
        ]
    }
])