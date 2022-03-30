import React, { Component } from "react";
import axios from "axios";
import {FindBreedsContainer} from "../styles/FindBreeds_style";

class Breeds extends Component {

  constructor() {
      super();
      this.state = {
          ImageUrl: "",
          BreedDog: [""],
          SelectInput: ""
      }
    }


      GetImage = () => { 
        const {SelectInput} = this.state;
        axios.get(`https://dog.ceo/api/breed/${SelectInput}/images/random`)
          .then(
            response => {
              this.setState({
                ImageUrl: response.data.message
              });

              console.log(response.data.message)
            })
          .catch(err => console.log(err))
      };

      getBreedDog = () => {
          const { BreedDog } = this.state;

          axios.get("https://dog.ceo/api/breeds/list")
          .then(response => {
            this.setState({
              BreedDog: BreedDog.concat(response.data.message)
          })
      })
        .catch(err => console.log(err));
      }

      handleSelect = (e) => {
        this.setState({
            SelectInput: e.target.value
        })
    }

    componentDidMount() {
        this.getBreedDog();
    }
      render() {

        const {BreedDog, ImageUrl, SelectInput} = this.state;

        return(
          <FindBreedsContainer>
            <div id="container">
<div id="button_">
          <form>
                <label>
                <select value={SelectInput} onChange={this.handleSelect} id="selectinput">
                    {BreedDog.map((e,index) => 
                    <option value={e} key={index}> {e} </option>
                    
                    )}
                    
                </select>
                 
                </label> 
                </form> 
                
                  
                <button type="submit" disabled={!SelectInput}  onClick={this.GetImage}>Enviar</button>
                </div>

            <div id="img">
                    <img src={ImageUrl}/>
                    <p class="text_breeds"> Raça: {SelectInput} </p>
                </div>

                </div>
          </FindBreedsContainer>
        )
      }
    }

export default Breeds;