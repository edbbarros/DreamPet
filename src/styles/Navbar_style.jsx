import styled from "styled-components";


export const NavbarContainer = styled.nav `
    margin: 0 auto;
    width: 95vw;
    height: 80px; 
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    ul{
        display: flex;
        list-style: none;
        font-family:'Mochiy Pop One',sans-serif;
        font-size: 16px;
        
    }
     li{
         padding: 5px;
     }

     li a{
        text-decoration: none;
        color: #FFFFFF;
     }

     .drop{
         display: none;

     }
     .drop.hover{
         display: block;
     }
     .drop_a:hover > .drop {
        display: flex;
        flex-direction: column;
        position: absolute;
        cursor: pointer;
     }

     .nav_icon{
        width: auto;
        height: auto;
     }

    #icon {
        width: 20vh;
    }

    #text_title {       
        font-family:'Mochiy Pop One',sans-serif;        
        font-size:20pt;
        color: #FFFFFF;
        margin-left: 15vw; 
    }

    @media screen and (max-width: 800px) {

        .area_menu{
            width: 5.5vw;
            height: 2.5vh;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            z-index: 1000;
            position: relative;
            
        }
        .lista{
            width: 100%;
            height: 2px;
            background-color: white;
            transition: 0.5s ;
        }
        .black{
            background-color: black;
        }

        .li1{
            transform: rotate(45deg);
        }

        .li2{
            display: none;
        }

        .li3{
            transform: rotate(135deg);
            margin-top: -13px;
          
            
        }

        #text_title{
            font-size: 20px;
            text-align: center;
            display: none;

        }
        ul{
            display: block;
            list-style: none;
            font-family:'Mochiy Pop One',sans-serif;
            text-align: center;
            
        }

        li{
            margin-top: 5px;
            line-height: 5vh;
        }

        li a{
        text-decoration: none;
        color: black;
     }

        .nav_icon{
            display: flex;
            justify-content: center;
            align-items: center;
            position:fixed;
            top: 0;
            left: 0;
            background:white;
            width: 100vw;
            height: 100vh;
            transform: translateX(100%);
            transition: 0.5s;
        }

        .hidden{
            transform: translateX(0);
            
        }
    }
    
`;



