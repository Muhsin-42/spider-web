import EventRequest from "@/pages/EventRequest";
import SingleEvent from "@/pages/SingleEvent";
import Layout from "@/pages/Layout";

export const routes = [
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
];
