import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Sidebar from "./components/Sidebar";
import "./styles/style.scss";

function App() {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "250px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/pagination" />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
