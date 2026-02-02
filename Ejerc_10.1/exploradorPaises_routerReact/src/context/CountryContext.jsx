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
        if (!listaPaises) return undefined;
        return listaPaises.find(p => p.name.common == nombre);
    }

    const getPaisPorDiminutivo = (diminutivo) => {
        if (!listaPaises) return undefined;
        return listaPaises.find(p => p.cca3 == diminutivo);
    }

    return (
        <CountryContext.Provider
            value={{
                paisActual, changePais, listaPaises, nuevaListaPaises, getPaisPorNombre, getPaisPorDiminutivo
            }} >
            {children}
        </CountryContext.Provider>
    );
}

export function useCountries() {
    return useContext(CountryContext);
}