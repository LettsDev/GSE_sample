import React from "react";
import ReactDOM from "react-dom/client";
import Calendar from "./routes/calendar/Calendar.tsx";
import "./index.css";
import MockWrapper from "./mock/mockWrapper.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from "./routes/root/Root.tsx";
import EditServiceEventModal from "./components/Edit Modals/EditServiceEvent.tsx";
import DeleteServiceEventModal from "./components/Delete Modals/DeleteServiceEvent.tsx";
import { ServiceEventsProvider } from "./context/serviceEvents.provider.tsx";
import { EquipmentProvider } from "./context/equipment.provider.tsx";
import { ServiceProvider } from "./context/services.provider.tsx";
import Table from "./routes/table/Table.tsx";
import Home from "./routes/home/Home.tsx";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/calendar",
          element: <Calendar />,
          children: [
            { path: "edit/:_id", element: <EditServiceEventModal /> },
            { path: "delete/:_id", element: <DeleteServiceEventModal /> },
            //add update status of event
          ],
        },
        { path: "/tables", element: <Table /> },
        { path: "/home", element: <Home /> },
      ],
    },
    { path: "*", element: <Navigate to="/" /> },
  ],
  { basename: "/gse_sample" }
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MockWrapper>
      <ServiceProvider>
        <EquipmentProvider>
          <ServiceEventsProvider>
            <RouterProvider router={router} />
          </ServiceEventsProvider>
        </EquipmentProvider>
      </ServiceProvider>
    </MockWrapper>
  </React.StrictMode>
);
