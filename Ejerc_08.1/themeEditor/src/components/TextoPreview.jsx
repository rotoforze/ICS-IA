import React, { memo } from "react";
import { useTheme } from "../context/ThemeContext";


const TextoPreview = memo(() => {
const {
state: { fontSize, textTransform },
} = useTheme();


return <p style={{ fontSize, textTransform }}>Texto de ejemplo del tema</p>;
});


export default TextoPreview;