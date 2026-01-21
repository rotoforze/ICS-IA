import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import RootLayout from "./components/RootLayout";
import DashboardLayout from "./components/DashboardLayout";

import HomePage from "./components/HomePage";
import TaskListPage from "./components/TaskListPage";
import TaskDetailPage from "./components/TaskDetailPage";
import NewTaskPage from "./components/NewTaskPage";
import NotFoundPage from "./components/NotFoundPage";

import "./app.css";


const ProfilePage = lazy(() => import("./components/ProfilePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <TaskListPage /> },
          { path: "new", element: <NewTaskPage /> },
          { path: "task/:taskId", element: <TaskDetailPage /> },
        ],
      },

      {
        path: "profile",
        element: (
          <Suspense fallback={<p>Cargando perfil...</p>}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
