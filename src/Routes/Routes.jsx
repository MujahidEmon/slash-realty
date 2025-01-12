import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";


const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/featured.json')
            }
        ]
    }
])

export default Routes;