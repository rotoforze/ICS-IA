import React from "react";
import ColorPicker from "./ColorPicker";
import FontSizeSlider from "./FontSizeSlider.jsx";
import TextTransformControls from "./TextTransformControls";


function SidePanel() {
    return (
        <aside style={{ width: 250, padding: 16, borderRight: "1px solid #ddd", display: "flex", flexWrap: "wrap" }}>
            <h3>Theme Editor</h3>
            <ColorPicker />
            <FontSizeSlider />
            <TextTransformControls />
        </aside>
    );
}

export default SidePanel;