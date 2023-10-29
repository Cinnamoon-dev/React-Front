import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages";

const Router = createBrowserRouter([
    {path: "/", element: <Home/>}
])

const AppRoutes = () => {
    return(
        <>
            <RouterProvider router={Router}/>
        </>
    )
}

export default AppRoutes;