import React, { memo } from "react";
import { useTheme } from "../context/ThemeContext";


const options = ["none", "uppercase", "lowercase", "capitalize"];


const TextTransformControls = memo(() => {
    const {
        state: { textTransform },
        dispatch,
    } = useTheme();


    return (
        <div>
            <label>Transformación de texto</label>
            <div style={{ display: "flex", flexWrap: "wrap"}}>
                {options.map((opt) => (
                    <button
                        key={opt}
                        style={{ fontWeight: textTransform === opt ? "bold" : "normal" }}
                        onClick={() =>
                            dispatch({ type: "SET_TEXT_TRANSFORM", payload: opt })
                        }
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
});


export default TextTransformControls;