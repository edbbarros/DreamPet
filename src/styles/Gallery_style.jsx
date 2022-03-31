import styled from "styled-components";

export const GalleryContainer = styled.div `


    margin: 0;
    padding: 0;
    box-sizing: border-box;


.center_text{
    font-size: 22pt;
    text-align:center;
    color: #ffbe0b;
    font-family:'Mochiy Pop One',sans-serif;

}

.center_text1{
        margin-top: 2vh;
        text-align:center;
        color:#FCFBFB;
        font-family: 'Poppins', sans-serif;
        font-size: 8pt;
        
    }
.container-grid 
{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 300px;
    padding: 20px;
    grid-gap: 20px;
}

.item-container .image-item
{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    
}


@media(max-width: 860px){
    .container-grid{
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 50vh;
    }
}

@media(max-width: 764px){
    .container-grid{
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 45vh;
    }
    .center_text{
    font-size: 15pt;
}
    .center_text1{
        margin-top: 2vh;
        text-align:center;
        color:#FCFBFB;
        font-family: 'Poppins', sans-serif;
        font-size: 8pt;
        
    }
}


@media(max-width: 560px){
    .container-grid{
        grid-template-columns: repeat(1, 1fr);
        grid-auto-rows: 40vh;
    }

    .center_text{
    font-size: 15pt;
}
    .center_text1{
        margin-top: 2vh;
        text-align:center;
        color:#FCFBFB;
        font-family: 'Poppins', sans-serif;
        font-size: 8pt;
        
    }

    .item-container .image-item
{
    width: 100%;
    height: 100%;

    border-radius: 20px;
    
}

}

`
