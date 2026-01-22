import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import SidePanel from "./components/SidePanel";
import PreviewPanel from "./components/PreviewPanel";


export default function App() {
  return (
    <ThemeProvider>
      <div style={{ display: "flex", height: "100vh", background: "#f5f6fa" }}>
        <SidePanel />
        <PreviewPanel />
      </div>
    </ThemeProvider>
  );
}