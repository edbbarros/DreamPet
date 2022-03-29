import React, {useState} from "react";
import axios from 'axios';
import { FindBreedsContainer } from "../styles/FindBreeds_style";



function FindBreeds(){
        const [FindBreeds, setFindBreeds] = useState([])
        const [imageSrc, setimageSrc] = useState('')
        //const [selectBreedName, setSelectedBreedName] = ('')
        //const [selectedSubbreedName, setSelectSubbreedName] = useState('')
       // const [isOpenData,setIsOpenData] = useState({})



   
        
         getFindBreeds = () => {
           const {FindBreeds } = this.state;
           axios.get (`https://dog.ceo/api/breeds/list/all`)
           .then(response => {
               this.setState({
                   setFindBreeds: response.data.json()
               })
               console.log(response.data.message)
           })
           .catch(err => console.log(err));
           
       };




  
        getImageDog = () => {
            const { selectInput } = this.state;

            axios.get(`https://dog.ceo/api/breed/${selectInput}/images/random`)
                .then(response => {
                    this.setState({
                        setFindBreeds: response.data.message
                    });
                    console.log(response.data.message)
                })
                .catch(err => console.log(err));

        };
    





    return(
        <FindBreedsContainer>
            <div id="container">
                <div>
                   
                </div>
            </div>
        </FindBreedsContainer>
    )
}


export default FindBreeds;


