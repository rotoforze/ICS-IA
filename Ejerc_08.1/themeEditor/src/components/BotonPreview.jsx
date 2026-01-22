import React, { memo } from "react";
import { useTheme } from "../context/ThemeContext";


const BotonPreview = memo(() => {
const {
state: { primaryColor, fontSize, textTransform },
} = useTheme();


return (
<button
style={{
backgroundColor: primaryColor,
color: "white",
fontSize,
textTransform,
padding: "8px 16px",
border: "none",
borderRadius: 6,
}}
>
Botón
</button>
);
});


export default BotonPreview;