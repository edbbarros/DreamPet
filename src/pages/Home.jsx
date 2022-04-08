import React from "react";
import { HomeContainer } from "../styles/Home_style";
import Logo from "../Icons/logo.svg";

function Home() {
    return (
        <HomeContainer>
            <div id="container">
                <div>
                    <h1 id="text_title">Guia de Raças</h1>
                    <h2 id="text_subtitle">Não importa se um cachorro é de raça,
                        eles sempre vão nos amar e nunca nos abandonar!</h2>
                </div>

                <div>
                    <img src={Logo} alt="logo" id="logo_page" />
                </div>
            </div>

        </HomeContainer>
    )
}

export default Home;