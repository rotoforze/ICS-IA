import React, { memo, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";


const CardPreview = memo(() => {
const {
state: { primaryColor, fontSize, textTransform },
} = useTheme();


const shadowColor = useMemo(() => primaryColor + "99", [primaryColor]);


return (
<div
style={{
padding: 16,
borderRadius: 8,
background: "white",
boxShadow: `0 4px 12px ${shadowColor}`,
fontSize,
textTransform,
}}
>
<h4>Card Preview</h4>
<p>Este componente reacciona al tema.</p>
</div>
);
});


export default CardPreview;