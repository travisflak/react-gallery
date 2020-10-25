import React, { Component } from 'react';
import axios from 'axios';
import './GalleryItem.css'; //import the GalleryItem.css file to do styling

class GalleryItem extends Component {

    state= {
        renderImage: true // create a default for rendering the image
    }

    switchToDescription = () => {
        console.log('clicked', this.state.renderImage);

        this.setState({
            renderImage: !this.state.renderImage
        }); 
    }

    renderImage = () => { 
        if (this.state.renderImage) {
            return <img src={this.props.photo.path} alt={this.props.photo.description} onClick={this.switchToDescription}></img>
        } else {
            return <div className="description" onClick={this.switchToDescription}>{this.props.photo.description}</div>
        }
    }

    photoGallery = () => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${this.props.photo.id}`
          }).then((response) => {
            console.log('response', response.data);
            this.props.refreshImage();
            this.setState({
              imagesGallery: response.data
            })
          }).catch((error) => {
            console.log('error', error);
          });
    }


        render() {
            return(
                <div className="photoWrapper">
                    {this.renderImage()}
                    <br/>
                <button onClick={this.photoGallery}>love it!</button>
                    <p>{this.props.photo.likes}</p>
                </div>
            )
        }
    }
    



export default GalleryItem;