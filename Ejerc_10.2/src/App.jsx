import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './routes/ErrorPage';
import { HomePage } from './routes/HomePage';
import { ProjectsPage } from './routes/ProjectsPage';
import { NewProjectPage } from './routes/NewProjectPage';
import './App.css';
import { ProjectProvider, loader } from './context/ProjectContext';
import { RootLayout } from './routes/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      loader: loader,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/projects', element: <ProjectsPage /> },
        { path: '/projects/new', element: <NewProjectPage /> }
      ]
    },
  ])
  return (
    <ProjectProvider>
      <RouterProvider router={router} />
    </ProjectProvider>
  );
}

export default App
