import styled from "styled-components";
import React, { Component } from "react";

const Div = styled.div`
  background-color: rgba(239, 220, 190, 0.29);
  height: 74vh;
  text-align: center;
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Formulaire = styled.form`
  background-color: rgba(228, 200, 155, 0.29);
  border: solid;
  border-radius: 8px;
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

const DivLabel = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
  width: 100%;
  text-align: start;
`;

const H1 = styled.h1`
  color: white;
  margin-bottom: 3vh;
  font-size : 8vh;
  text-shadow: 1px 1px 2px black;

`;

const Label = styled.label`
  color: white;
  text-shadow: 1px 1px 2px black;
  display: inline-block;
  margin-right: 10px;
  width: 30%;
`;

const Input = styled.input`
  padding-left: 10%;
  width: 50%;
`;
const Select = styled.select`
  padding-left: 10%;
  width: 61%;
  text-align: center;
`;

const StyledButton = styled.input`
  padding: 0 20px;
  border: none;
  background: #e9c47b;
  color: white;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  height: 4vh;
  border-radius: 5px;
  margin: 1em 0;
  &:hover {
    background: #fbf7ef;
    color: #e9c47b;
    border: 2px solid #e9c47b;
    cursor: pointer;
  }
`;

const place = [];
  for (let i = 1; i < 6; i += 1) {
    place.push(
      <option value={i * 6} key={i}>
        {i}
      </option>
    );
  }

  const luggage = [];
  for (let i = 1; i < 6; i += 1) {
    luggage.push(
      <option value={i * 6} key={i}>
        {i}
      </option>
    );
  }

  const day = [];
  for (let i = 1; i < 32; i += 1) {
    day.push(
      <option value={i * 32} key={i}>
        {i}
      </option>
    );
  }

  export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name :"",
      departure:"",
      arrival:"",
      day_departure:"",
      month_departure:"",
      price: "",
      seats:"",
      luggage: "",
      char_model:"",
      char_image : [{
        url:""}
      ],
      profile_image : [{
        url:""}
      ],
    }
  }


  onChange = (e) =>{
    switch(e.target.name) {
      
        case "profile_image":
        const new_profile_image = [{
          url: e.target.value
        }]
        this.setState({
          profile_image: new_profile_image
        });
        break;
      case "char_image":
        const new_char_image = [{
          url: e.target.value
        }]
        this.setState({
          char_image: new_char_image
        });
        break;
      
      default:
        this.setState({
          [e.target.name] : e.target.value
        });
    }
  };

  
  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state)
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    const url = "https://still-ravine-63028.herokuapp.com/profiles";
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Your travel #${res} has been successfully added!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding the travel.");
      });
  };



render(){
  return (
    <Div>
      <H1>Post your trip</H1>
      <div>
        <Formulaire onSubmit={this.submitForm}>
          <fieldset>
            <DivLabel>
              <Label htmlFor="name">Name :</Label>
              <Input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name} />
            </DivLabel>
            <DivLabel>
              <Label htmlFor="departure">Departure:</Label>
              <Input type="text" name="departure" id="departure" onChange={this.onChange} value={this.state.departure}/>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="arrival">Arrival :</Label>
              <Input type="text" name="arrival" id="arrival" onChange={this.onChange} value={this.state.arrival}/>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="day_departure">Choose Day :</Label>
              <Select name="stday_departureart" id="day_departure" onChange={this.onChange} value={this.state.month_departure}>
                {day}
              </Select>
            </DivLabel>
            <DivLabel>
            <Label htmlFor="month_departure">Choose Month :</Label>
            <Select name="month_departure" id="month_departure"onChange={this.onChange} value={this.state.month_departure}>
                <option value="Hécatombéion">Hécatombéion</option>
                <option value="Metageitnion">Metageitnion</option>
                <option value="Béodromion">Béodromion</option>
                <option value="Pyanepsion">Pyanepsion</option>
                <option value="Maimaiterion">Maimaiterion</option>
                <option value="Poséidéon">Poséidéon</option>
                <option value="Gamelion">Gamelion</option>
                <option value="Anthestérion">Anthestérion</option>
                <option value="Elaphébolion">Elaphébolion</option>
                <option value="Mounikion">Mounikion</option>
                <option value="Thargélion">Thargélion</option>
                <option value="Scirophoron">Scirophoron</option>
              </Select>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="price" >Price :</Label>
              <Input type="text" name="price" id="price" onChange={this.onChange} value={this.state.price} />
            </DivLabel>
            <DivLabel>
              <Label htmlFor="place-select" >Place :</Label>
              <Select name="place-select" id="place-select" onChange={this.onChange} value={this.state.seats}>
                {place}
              </Select>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="luggage">Luggage :</Label>
              <Select name="luggage" id="luggage" onChange={this.onChange} value={this.state.luggage}>
                {luggage}
              </Select>
            </DivLabel>
            <DivLabel>
              <Label htmlFor="chariot">Chariot :</Label>
              <Input type="text" name="chariot" id="chariot" onChange={this.onChange} value={this.state.month_departure} />
            </DivLabel>
            <DivLabel>
              <Label htmlFor="char_image">User photo :</Label>
              <Input type="text" name="char_image" id="char_image" onChange={this.onChange} value={this.char_image}  />
            </DivLabel>
            <DivLabel>
              <Label htmlFor="profile_image">Chariot picture :</Label>
              <Input type="text" name="profile_image" id="profile_image" onChange={this.onChange} value={this.profile_image} />
            </DivLabel>
            <StyledButton type="submit" value="Send" />
          </fieldset>
        </Formulaire>
      </div>
    </Div>
  );
}
}