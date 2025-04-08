import EditorPage from "../pages/EditorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SidePage from "../pages/SidePage";
import PaginationPage from "../pages/PaginationPage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/side",
    element: <SidePage />,
  },
  {
    path: "/editor",
    element: <EditorPage />,
  },
  {
    path: "/pagination",
    element: <PaginationPage itemsPerPage={5} />,
  },
];
