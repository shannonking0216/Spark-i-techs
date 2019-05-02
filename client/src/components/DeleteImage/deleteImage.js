import React, { Component } from "react";
import API from "../../utils/API";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



// import AuthService from './components/AuthService';
// import withAuth from './components/withAuth';
// const Auth = new AuthService();


class DeleteImage extends Component {
  state = {
    NatureGallery: [],
    EngagementGallery: [],
    FoodGallery: [],
    selectValue: ""
  }

  componentDidMount() {
    API
      .getAllNatureImages()
      .then(response => this.setState({ NatureGallery: response.data }))
      .catch(err => console.log(err));
    API
      .getAllEngagementImages()
      .then(response => this.setState({ EngagementGallery: response.data }))
      .catch(err => console.log(err));
    API
      .getAllFoodImages()
      .then(response => this.setState({ FoodGallery: response.data }))
      .catch(err => console.log(err));

  }

  handleDeleteNatureImage = () => {
    alert("Yay, the button works ")
  }


  handleFileInputChange = (event) => {
    this.setState({selectValue:event.target.value});
    console.log("You selected" + this.state.selectValue)
  }



  render() {
    return (
      <div className="container removeImage">


        <hr />

        <h3>Remove an Image</h3>
        <div>

          {['down'].map(direction => (
            <DropdownButton
              drop={direction}
              variant="secondary"
              title={` Drop ${direction} `}
              id={`dropdown-button-drop-${direction}`}
              key={direction}
            >
              <Dropdown.Item>Nature Gallery</Dropdown.Item>
              <Dropdown.Divider />
              {this.state.NatureGallery.map(image => (
                <Dropdown.Item
                  value={this.state.selectValue}
                  onClick={this.handleDeleteNatureImage}>
                  {image.fileName}
                </Dropdown.Item>
              ))}
              <Dropdown.Divider />
              <Dropdown.Item>Engagement Gallery</Dropdown.Item>
              <Dropdown.Divider />
              {this.state.EngagementGallery.map(image => (
                <Dropdown.Item>{image.fileName}</Dropdown.Item>
              ))}
              <Dropdown.Item>Food Gallery</Dropdown.Item>
              <Dropdown.Divider />
              {this.state.FoodGallery.map(image => (
                <Dropdown.Item>{image.fileName}</Dropdown.Item>
              ))}
            </DropdownButton>
          ))}




        </div>
      </div>
    )
  }
}


export default DeleteImage;


{/* <Button  
type="submit"
className="btn btn-outline-primary btn-block pt-2"
onClick={this.handleSubmitNature}
variant="outline-success">Nature Gallery</Button>

<Button variant="outline-danger" 
type="submit"
className="btn btn-outline-primary btn-block pt-2"
onClick={this.handleSubmitEngagement}>Engagement Gallery</Button>

<Button 
variant="outline-warning" type="submit"
className="btn btn-outline-primary btn-block pt-2"
onClick={this.handleSubmitFood}>Food Gallery</Button */}