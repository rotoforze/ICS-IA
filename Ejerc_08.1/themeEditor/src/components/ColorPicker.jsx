import React, { memo } from "react";
import { useTheme } from "../context/ThemeContext";


const ColorPicker = memo(() => {
const {
state: { primaryColor },
dispatch,
} = useTheme();


return (
<div>
<label>Color principal</label>
<input
type="color"
value={primaryColor}
onChange={(e) =>
dispatch({ type: "SET_PRIMARY_COLOR", payload: e.target.value })
}
/>
</div>
);
});


export default ColorPicker;