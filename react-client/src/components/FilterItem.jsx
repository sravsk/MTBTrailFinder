import React from 'react';
import Geocode from 'react-geocode';
import { Panel , DropdownButton, ButtonToolbar , MenuItem, Button, ButtonGroup, Input} from 'react-bootstrap';
import { withRouter } from "react-router-dom";

Geocode.setApiKey("AIzaSyBOx7iBg76UcO4y7XvzrX0-aaElPTe9xb4");
Geocode.enableDebug();

class FilterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty : '',
      distance : '',
      userCoords : {
        lat : '',
        lng : ''
      },
      address : ''
    }

  }

handleLocationChange(e) {
  const address = e.target.value;
  Geocode.fromAddress(address).then(response => {
    const coords = response.results[0].geometry.location;
        this.setState({
          userCoords : {
            lat : coords.lat,
            lng : coords.lng
          },
          address : address
        })
      },error => {
        console.error(error)
      }
    );
  }



  handleChange(event, index, value, eventKey) {
  this.setState({
    difficulty : event
    //value: event.currentTarget.textContent
  })

}

handleDistanceChange (event, index, value) {
  this.setState({
    distance : event
  })
}

  search() {
    console.log("location inside filter comp", this.state.userCoords);
    this.props.onSearch(this.state.difficulty, this.state.distance, this.state.userCoords, this.state.address);
    this.props.history.push("/trails");
  }


render() {
  console.log("props inside fetch method in filter", this.state)
  return (
    <Panel>
      <ButtonToolbar>
         <input type="text" className="form-control" placeholder="Enter Location" onChange={this.handleLocationChange.bind(this)} aria-describedby="basic-addon2"></input>

         <DropdownButton title="Difficulty Level" onSelect={this.handleChange.bind(this)} id="dropdown-basic-1" key="1">
              <MenuItem eventKey="green">Easy</MenuItem>
              <MenuItem eventKey="greenBlue">Beginner</MenuItem>
              <MenuItem eventKey="blue">Intermediate</MenuItem>
              <MenuItem eventKey="blueBlack">Advanced</MenuItem>
              <MenuItem eventKey="dblack">Expert</MenuItem>

         </DropdownButton>


         <DropdownButton title="Distance" onSelect={this.handleDistanceChange.bind(this)} id="dropdown-basic-2" key="2">
        <MenuItem eventKey="10">10</MenuItem>
              <MenuItem eventKey="30">30</MenuItem>
              <MenuItem eventKey="50">50</MenuItem>
              <MenuItem eventKey="70">70</MenuItem>
              <MenuItem eventKey="100">100</MenuItem>
              <MenuItem eventKey="150">150</MenuItem>
              <MenuItem eventKey="200">200</MenuItem>
        </DropdownButton>
       <Button onClick={this.search.bind(this)} className="pull-right" bsStyle="info">Search Trails</Button>
     </ButtonToolbar>
   </Panel>
   )
 }
}

export default withRouter(FilterItem);