import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./utils/routes";

const appRouter = createBrowserRouter(routes);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
