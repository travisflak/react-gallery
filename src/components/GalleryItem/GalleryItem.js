import React, { Component } from 'react';

class GalleryItem extends Component {

    photoGallery = () => {
        console.log('in photoGallery');
        
    }
    
        render() {
            return(
        
                    <div>
                      <img src={this.props.photo.path} />
                      <button>LIKE</button>
                      <p>TESTING</p>
                    </div>
            
            )
        }
    }
    



export default GalleryItem;