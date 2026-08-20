import { createBrowserRouter } from "react-router";

import ErrorPage from "../components/ErrorPage.jsx";
import RootLayout from "../components/layout/RootLayout.jsx";
import BootcampPage from "../routes/bootcamp/BootcampPage.jsx";
import HomePage from "../routes/home/HomePage.jsx";
import JoinPage from "../routes/join/JoinPage.jsx";
import JetEnginePage from "../routes/projects/JetEnginePage.jsx";
import ProjectsPage from "../routes/projects/ProjectsPage.jsx";
import RocketA4Page from "../routes/projects/RocketA4Page.jsx";
import SigmaPage from "../routes/projects/SigmaPage.jsx";
import SponsorsPage from "../routes/sponsors/SponsorsPage.jsx";
import TeamPage from "../routes/team/TeamPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        
        children: [
            { index: true, element: <HomePage /> },
            { path: "projects", element: <ProjectsPage /> },
            { path: "projects/sigma", element: <SigmaPage /> },
            { path: "projects/rocket-a4", element: <RocketA4Page /> },
            { path: "projects/jet-engine", element: <JetEnginePage /> },
            { path: "team", element: <TeamPage /> },
            { path: "join", element: <JoinPage /> },
            { path: "sponsors", element: <SponsorsPage /> },
            { path: "bootcamp", element: <BootcampPage /> }
        ]
    }
]);

export default router;
