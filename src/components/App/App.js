import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  componentDidMount = () => {
    console.log('mounted');
    // call to get the gallaery data that are already stored
    this.getGalleryData();
  }

  state = {
    imagesGallery: [],
  };

  //GET request
  getGalleryData = () => {
    console.log('in getGalleryData');
    axios({
      method: 'GET',
      url: '/api/images'
    }).then((response) => {
      console.log('response', response.data);
      this.setState({
        imagesGallery: response.data
      })
    }).catch((error) => {
      console.log('error', error);
    });
  }

  render() {
    return (
      <div className="App">
        {/* new class name for styling background image in App.css*/}
        <div className="container">
        <header className="App-header">
          <h1 className="App-title">Gallery of Images</h1>
        </header>
        <br/>
        <p>
        <GalleryList galleryArray = {this.state.imagesGallery} refreshImage = {this.getGalleryData}/>
        </p>
        </div>
      </div>
    );
  }
}

export default App;
