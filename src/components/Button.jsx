import React from "react";
import './Button.css'

function Button({children, onClick}){
    return(
        <button onClick={onClick} className="button">
            {children}
        </button>
    )
}
export default Button
