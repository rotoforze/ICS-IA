import './App.css'
import CountryContainer from './components/CountryContainer';
import CountryInformation from './components/CountryInformation';
import { loader as countryLoader } from './components/CountryContainer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CountryContainer />,
      loader: countryLoader,
      children: [
        {path: '/:countryName', element: <CountryInformation /> }
      ]
    }
  ])
  return (
    <CountryProvider>
      <RouterProvider router={router}/>
    </CountryProvider>
  );
}

export default App