import React, { memo } from "react";
import { useTheme } from "../context/ThemeContext";


const FontSizeSlider = memo(() => {
const {
state: { fontSize },
dispatch,
} = useTheme();


return (
<div>
<label>Tamaño de texto: {fontSize}px</label>
<input
type="range"
min={12}
max={32}
value={fontSize}
onChange={(e) =>
dispatch({ type: "SET_FONT_SIZE", payload: Number(e.target.value) })
}
/>
</div>
);
});


export default FontSizeSlider;