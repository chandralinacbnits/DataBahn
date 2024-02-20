import "./App.css";
import HorizontalTree from "./components/horizantalPath/horizontalPath.jsx";
import CurvedRoad from "./components/curvedRoad/road.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import AiTags from "./components/AiTags/AiTags.jsx";
import Transform from "./components/Transform/transform.jsx";
import VolumeReduction from "./components/VolumeReduction/VolumeReduction.jsx";
import Insights from "./components/Insights/Insights.jsx";
import Home from "./components/Home/Home.jsx";

const route = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/insights", element: <Insights /> },
  { path: "/ai-Tags", element: <AiTags /> },
  { path: "/volume-reduction", element: <VolumeReduction /> },
  { path: "/transform", element: <Transform /> },
  { path: "/", element: <Home /> },
  { path: "*", element: <Home /> }

]);

function App() {
  return (
    <>
      <RouterProvider router={route}>
        <Outlet></Outlet>
      </RouterProvider>
    </>
  );
}

export default App;
