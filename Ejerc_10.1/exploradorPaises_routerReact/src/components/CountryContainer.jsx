import { Outlet, useLoaderData, useParams } from "react-router-dom";
import CountryList from "./CountryList";
import { useCountries } from "../context/CountryContext";
function CountryContainer() {
    const paises = useLoaderData();
    const { paisActual, changePais, listaPaises, nuevaListaPaises } = useCountries();
    
    if (paises != listaPaises) nuevaListaPaises(paises);

    return (
        <main>
            <div>
                <h1>API para mostrar información de países</h1>
                <h4>alexbg87</h4>
            </div>
            <div>
                <CountryList paises={paises} />
                <Outlet />
            </div>
        </main>
    );
}

export async function loader() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe');
    if (!response.ok) {
        throw new Error('no se ha recibido respuesta');
    }
    return response.json();
}

export default CountryContainer;