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

  getGalleryData = () => {
    console.log('in getGalleryData');
    axios({
      method: 'GET',
      url: '/gallery'
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
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList galleryArray = {this.state.imagesGallery} />
      </div>
    );
  }
}

export default App;
