
import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

//props are all the images from the API with map we take one image and in Photo component we take the id, secret, server and farm to get one Image

const Gallery = (props)=>{
    const results = props.data;
    let photos;
    if(results.length> 0)
    {photos = results.map(photo =><Photo data={photo} key={photo.id}/>);
        return(
            <div className="photo-container">
                <h2>{props.title} images</h2>
                    <ul>{photos}</ul>
            </div>
        );}else{ 
            photos = <NotFound/>;
            return(
                <div className="photo-container">
                    <ul>{photos}</ul>
                </div>
            );
        }
};

export default Gallery;