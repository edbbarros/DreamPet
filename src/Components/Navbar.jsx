import React, { useState } from "react";
import { NavbarContainer } from "../styles/Navbar_style";
import Icone from "../Icons/icone.svg";


function Navbar() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (

        <NavbarContainer>

            <img id="icon" src={Icone} />
            <h2 id="text_title">Guia de Cães</h2>

            <div className="area_menu" onClick={handleToggle}>
                <div className={isActive ? "lista black li1" : "lista"} ></div>
                <div className={isActive ? "lista black li2" : "lista"} ></div>
                <div className={isActive ? "lista black li3" : "lista"} ></div>
            </div>

            <nav className={isActive ? "nav_icon hidden" : "nav_icon"}>


                <ul className="menu">
                    <li><a href="/" className="link">Inicio</a></li>
                    <li><a href="/galeria" className="link">Galeria</a></li>
                    <li className="drop_a"><a href="#" className="link">Pesquisa</a>
                        <ul className="drop">
                            <li> <a href="/findbreeds">Pesquisar por raça</a> </li>
                            <li> <a href="/subfindbreeds">Pesquisar por Sub-raça </a> </li>
                        </ul>

                    </li>

                </ul>
            </nav>
        </NavbarContainer>
    )
}

export default Navbar; 