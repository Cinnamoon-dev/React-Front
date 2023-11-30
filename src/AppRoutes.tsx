import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateUser, Home } from "./pages";

const Router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/user/add", element: <CreateUser/>}
])

const AppRoutes = () => {
    return(
        <>
            <RouterProvider router={Router}/>
        </>
    )
}

export default AppRoutes;