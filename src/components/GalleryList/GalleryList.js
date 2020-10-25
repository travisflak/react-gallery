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
                    {/* use map to loop through */}
                    {this.props.galleryArray.map((photo) => {
                        return <GalleryItem photo={photo} refreshImage={this.props.refreshImage}/>  
                    })}
                </div>
            </>
        )
    }
}


export default GalleryList;