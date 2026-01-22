import React from "react";
import TextoPreview from "./TextoPreview";
import BotonPreview from "./BotonPreview";
import CardPreview from "./CardPreview";


export default function PreviewPanel() {
return (
<main style={{ flex: 1, padding: 24, display: "grid", gap: 16 }}>
<TextoPreview />
<BotonPreview />
<CardPreview />
</main>
);
}