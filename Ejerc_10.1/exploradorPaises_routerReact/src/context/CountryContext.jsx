import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

export function CountryProvider({ children }) {
    const [paisActual, setPaisActual] = useState(undefined);
    const [listaPaises, setlistaPaises] = useState(undefined);

    const changePais = (paisNuevo) => {
        setPaisActual(paisNuevo);
    }

    const nuevaListaPaises = (nuevosPaises) => {
        setlistaPaises(nuevosPaises);
    }

    const getPaisPorNombre = (nombre) => {
        listaPaises.map((p) => {
            if (nombre == p.name.common) return p;
        })
    }

    return (
        <CountryContext.Provider
            value={{
                paisActual, changePais, listaPaises, nuevaListaPaises, getPaisPorNombre
            }} >
            {children}
        </CountryContext.Provider>
    );
}

export function useCountries() {
    return useContext(CountryContext);
}