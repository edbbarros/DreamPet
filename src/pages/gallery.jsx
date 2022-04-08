import React, { useState, useEffect } from "react";
import axios from "axios";
import { GalleryContainer } from "../styles/Gallery_style";



function Gallery() {

    const [Gallery_dogs, setGallery_Dogs] = useState([]);

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random/8")
            .then(res => {
                setGallery_Dogs(res.data.message)
                console.log(res)
            })
    }, []);

    return (
        <GalleryContainer>

            <div className="center_text">
                <h1>Galeria dos pets</h1>
            </div>

            <div className="center_text1">
                <h2>"Meu cachorro é a melhor companhia que eu poderia querer!
                    Mesmo sem falar,ele me entende melhor que qualquer pessoa."</h2>
            </div>

            <div className='container-grid'>

                {Gallery_dogs.map((dog, i) => (

                    <div className='item-container' key={i}>
                        <img src={dog} alt="dogs" className="image-item" />
                    </div>
                ))}
            </div>
        </GalleryContainer>
    )
}
export default Gallery;