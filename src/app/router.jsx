import { createBrowserRouter, Navigate } from "react-router";

import ErrorPage from "../components/ErrorPage.jsx";
import RootLayout from "../components/layout/RootLayout.jsx";
import BootcampPage from "../routes/bootcamp/BootcampPage.jsx";
import HomePage from "../routes/home/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        
        children: [
            { index: true, element: <HomePage /> },
            { path: "projects", element: <Navigate to="/#projects" replace /> },
			{
				path: "projects/sigma",
				element: <Navigate to="/?project=sigma#projects" replace />,
			},
			{
				path: "projects/rocket-a4",
				element: <Navigate to="/?project=rocket-a4#projects" replace />,
			},
			{
				path: "projects/jet-engine",
				element: <Navigate to="/?project=jet-engine#projects" replace />,
			},
            { path: "team", element: <Navigate to="/#about" replace /> },
            { path: "join", element: <Navigate to="/#join" replace /> },
            { path: "sponsors", element: <Navigate to="/#sponsors" replace /> },
            { path: "bootcamp", element: <BootcampPage /> }
        ]
    }
]);

export default router;
