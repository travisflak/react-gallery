import React, { Component } from 'react';

class GalleryList extends Component {

photoGallery = () => {
    console.log('in photoGallery');
    
}

    render() {
        return(
            <>
                <div>
                    <h1>
                        {this.props.galleryArray.map((photo) => {
                            return <photoGallery photo={photo} />
                        })};
                    </h1>
                </div>
            </>
        )
    }
}


export default GalleryList;