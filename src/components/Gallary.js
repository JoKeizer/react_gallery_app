import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import Photo from './Photo';
import NotFound from './NotFound';


class Gallary extends PureComponent {

  componentDidMount = () => {
    // Lifts App.js state to search for image keyword
    this.props.history.listen(location => this.props.search(location.pathname.replace(/[^\w\s]/gi, '').replace("search", '')));
    this.props.search(this.props.text);
  }

  render() {
    const results = this.props.data;
    let photos;
    if (results.length) {
     // Maps each photo in the 16 photo Flickr object received from App.js and passes them to Photo.js
     photos = results.map(photo =>
        <Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} pathId={photo.id} />
      );
    } else {
      photos = <NotFound />
    }
    // Returns loading Flickr animated logo icon while waiting for API fetch, once fetch is successful it displays image thumbnail gallery to the page 
    return (
        <div className="photo-container">
            <h2>Images {this.props.title}</h2>
            <ul className="photo-list">
                {this.props.loading ? <span className="spinner">Loading...</span> : photos}
            </ul>
        </div>
 
    );
  }

}

export default withRouter(Gallary);