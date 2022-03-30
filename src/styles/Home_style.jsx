import styled from "styled-components";

export const HomeContainer = styled.div `
    #container{
        
        margin-left: 5%;
        width: 90%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
   
  }
  #text_title{
      color:#FF9C39;
      font-family:'Mochiy Pop One',sans-serif;
      font-size:45pt;
     
  }
  #text_subtitle{
     
      margin-top: 3vh;
      color: #E2E2E2;
      font-family: 'Poppins', sans-serif;
      font-weight: lighter;
      font-size:10pt;
      width: 70%;
      text-align: center;
  }
    #logo_page{
        width: 20vw;
        color: #FF9C39;
    }

    
    @media screen and (max-width: 768px) {
        #container{
        display: flex;
        align-items: center;
        flex-direction:column-reverse;
        }

        #text_title{
            font-size: 35pt;
            text-align: center;
        }
        #text_subtitle{
            width: 100%;
        }
        #logo_page{
            height: 40vh;
            width: 50vw;
        }
    }
`;