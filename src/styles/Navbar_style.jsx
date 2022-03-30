import styled from "styled-components";


export const NavbarContainer = styled.nav `
    width: 100%;
    height: 80px; 
    display:flex;
    justify-content: space-between;

    #icon {
        width: 20vh;
        margin-left: 2vh;
    }

    #text_title {       
        font-family:'Mochiy Pop One',sans-serif;        
        font-size:20pt;
        color: #FFFFFF;
        display: flex;
        align-items: center;
    }

    ul.menu {
        display: inline-flex;
        list-style: none;
        }

    ul li.menu_list {
        display: flex;
        align-items: center;
        font-size: 12pt;
        margin: 4pt;
        padding: 2pt;
        font-family: 'Manrope', sans-serif; 
        font-weight: bold ;

    }

    ul li a.link {
        color: #fff;
        text-decoration: none;
              

    }

    @media screen and (max-width: 768px) {
        #container{
        display: flex;
        align-items: center;
        flex-direction:column-reverse;
        }
    }
    
`;



