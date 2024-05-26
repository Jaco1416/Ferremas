import React, { useState } from "react";
import "./Midbar.css";
import { Link } from "react-router-dom";


const Midbar = () => {
    const [pagina, setPagina] = useState("Inicio");

    return (
        <div>
            <div className="Midbar">
                <ul className="nav-menu">
                    <li onClick={() => { setPagina("Mens") }}><Link style={{ textDecoration: 'none', color: `white` }} to='/mens'>Ropa</Link>{pagina === "Mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setPagina("Womens") }}><Link style={{ textDecoration: 'none', color: `white` }} to='/womens'>Herramientas</Link>{pagina === "Womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setPagina("Kids") }}><Link style={{ textDecoration: 'none', color: `white` }} to='/kids'>Materiales</Link>{pagina === "Kids" ? <hr /> : <></>}</li>
                </ul>
            </div>
        </div>
    )
}

export default Midbar
