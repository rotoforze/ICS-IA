import './App.css'
import CountryContainer from './components/CountryContainer';
import CountryInformation from './components/CountryInformation';
import { loader as countryLoader } from './components/CountryContainer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import ErrorPage from './components/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CountryContainer />,
      loader: countryLoader,
      errorElement: <ErrorPage />,
      children: [
        {path: '/:nombre', element: <CountryInformation /> }
      ]
    },
  ])
  return (
    <CountryProvider>
      <RouterProvider router={router}/>
    </CountryProvider>
  );
}

export default App