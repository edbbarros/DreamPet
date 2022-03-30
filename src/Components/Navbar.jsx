import React from "react";
import {NavbarContainer} from "../styles/Navbar_style";
import Icone from "../Icons/icone.svg";


function Navbar(){
    return (
        <NavbarContainer>
            
            <img id ="icon" src={Icone} />
            <h2 id="text_title">Guia de Cães</h2> 
            <ul className="menu">
                <li className="menu_list"><a href="#" className="link">Inicio</a></li>
                <li className="menu_list"><a href="#" className="link">Galeria</a></li>
                <li className="menu_list"><a href="#" className="link">Pesquisa</a></li>    
            </ul>   
                    
             </NavbarContainer>
    )
}

export default Navbar;