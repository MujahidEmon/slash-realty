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
                loader: async () => {
                    const featuredResponse = await fetch('/featured.json');
                    const reviewsResponse = await fetch('/reviews.json');
                    const featured = await featuredResponse.json();
                    const reviews = await reviewsResponse.json();
                    return { featured, reviews };
                  }
            }
        ]
    }
])

export default Routes;