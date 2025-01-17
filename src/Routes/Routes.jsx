import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Properties from "../Pages/Properties/Properties";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PropertyDetails from "../Pages/Properties/PropertyDetails/PropertyDetails";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";


const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: async () => {
                    const featuredResponse = await fetch('/featured.json');
                    const reviewsResponse = await fetch('/reviews.json');
                    const featured = await featuredResponse.json();
                    const reviews = await reviewsResponse.json();
                    return { featured, reviews };
                  }
            },
            {
                path: '/properties',
                element: <Properties></Properties>,
                loader: () => fetch('/featured.json'),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/properties/:id',
                element: <PrivateRoutes><PropertyDetails></PropertyDetails></PrivateRoutes>,
                loader: ({params}) => fetch('/featured.json')
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
                children: [
                    {
                        path: '/profile/editProfile',
                        element: <UpdateProfile></UpdateProfile>
                    }
                ]
            }
        ]
    }
])

export default Routes;