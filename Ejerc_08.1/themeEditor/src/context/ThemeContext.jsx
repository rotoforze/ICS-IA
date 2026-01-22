import React, { createContext, useContext, useReducer, useMemo } from "react";


const ThemeContext = createContext(null);


const initialState = {
primaryColor: "#6c5ce7",
fontSize: 16,
textTransform: "none",
};


function themeReducer(state, action) {
switch (action.type) {
case "SET_PRIMARY_COLOR":
return { ...state, primaryColor: action.payload };
case "SET_FONT_SIZE":
return { ...state, fontSize: action.payload };
case "SET_TEXT_TRANSFORM":
return { ...state, textTransform: action.payload };
default:
return state;
}
}


export function ThemeProvider({ children }) {
const [state, dispatch] = useReducer(themeReducer, initialState);


const value = useMemo(() => ({ state, dispatch }), [state]);


return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}


export function useTheme() {
const context = useContext(ThemeContext);
if (!context) {
throw new Error("useTheme must be used within ThemeProvider");
}
return context;
}