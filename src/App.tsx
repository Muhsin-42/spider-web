import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import EventRequest from "./pages/EventRequest";
import SingleEvent from "./pages/SingleEvent";
import Layout from "./pages/Layout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <EventRequest />
      </Layout>
    ),
  },
  {
    path: "/event",
    element: (
      <Layout>
        <SingleEvent />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
