import styled from "styled-components";


export const FindSubBreedsContainer = styled.div `
    #container{
        
        margin-left: 5%;
        width: 90%;
        height: 80vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row-reverse;
        
   
    }

    #selectinput{
        background: #FCFBFB;
        border-radius: 10px;
        width: 40vw;
        height: 6vh;
        font-size:12pt;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        
    }

    button{
        
        margin-top: 3vh;
        margin-left: 13vw;
        align-items: center;
        width: 15vw;
        height:5vh ;
        border-radius: 10px;
        background: #ffbe0b;
        color: #FCFBFB;
        font-family:'Mochiy Pop One',sans-serif;
        font-size:12pt;
        text-align: center;
        cursor: pointer;

    }
    
    img{

        width: auto;
        height: auto;
        min-height: 25vh;
        min-width: 20vh;
        max-width:40vw;
        max-height:50vh;
        object-fit: cover;
        border-radius: 5px;
    }

    .text_breeds{
    
      margin-top: 1vh;
      align-items: center;
      color: #E2E2E2;
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      font-size:16pt;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
        #container{
        display: flex;
        align-items: center;
        flex-direction:column-reverse;
        }

        #selectinput{
        background: #FCFBFB;
        border-radius: 10px;
        width: 80vw;
        height: 6vh;
        font-size:12pt;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        
    }

        button{

            margin-left: 22%;
            width: 40vw;
            border: none;
            
        }
    }
`
