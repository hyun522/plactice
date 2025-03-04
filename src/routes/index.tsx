import EditorPage from "../pages/EditorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SidePage from "../pages/SidePage";

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
];
