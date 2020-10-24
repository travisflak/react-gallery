import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

photoGallery = () => {
    console.log('in photoGallery');
    
}

    render() {
        return(
            <>
                <div>
                    {this.props.galleryArray.map((photo) => {
                        return <GalleryItem photo={photo}/>  
                    })}
                </div>
            </>
        )
    }
}


export default GalleryList;