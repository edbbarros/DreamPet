import React, { Component } from "react";
import axios from "axios";
import {FindSubBreedsContainer} from "../styles/FindSubBreeds_style";

class SubBreeds extends Component {

  constructor() {
      super();
      this.state = {
          ImageUrl: "",
          BreedDog: [""],
          SelectInput: ""
      }
    }


      GetImageSubBreedDog= () => { 
        const {SelectInput} = this.state;
        axios.get(`https://dog.ceo/api/breed/hound/${SelectInput}/images/random`)
          .then(
            response => {
              this.setState({
                ImageUrl: response.data.message
              });

              console.log(response.data.message)
            })
          .catch(err => console.log(err))
      };

      getSubBreedDog = () => {
          const { BreedDog } = this.state;

          axios.get("https://dog.ceo/api/breed/hound/list")
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
        this.getSubBreedDog();
    }
      render() {

        const {BreedDog, ImageUrl, SelectInput} = this.state;

        return(
          <FindSubBreedsContainer>
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
                
                  
                <button type="submit" disabled={!SelectInput}  onClick={this.GetImageSubBreedDog}>Enviar</button>
                </div>

            <div id="img">
                    <img src={ImageUrl}/>
                    <p className="text_breeds"> Sub-Raça: {SelectInput} </p>
                </div>

                </div>
          </FindSubBreedsContainer>
        )
      }
    }

export default SubBreeds;