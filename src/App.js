import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Gallary from './components/Gallary'
import NotFound from './components/NotFound'
import Nav from './components/Nav'

import apiKey from './config';
import axios from 'axios'
import './App.css';



class App extends Component {
    state = {
        photos: [],
        loading: true,
        title: '',
      }
      
      // Fetches Flickr API, and loads object containing 16 images that match the keyword into photos state.
      performSearch = text => {
        this.setState({
          loading: true
        });
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            photos: response.data.photos.photo,
            loading: false,
            title: text
         });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error fetching Flickr API data', error);
      });    
      }
      

    render() {
        const history = createHistory();
        // Parses out just the search text from the url object.
        let searchText = history.location.pathname.replace(/[^\w\s]/gi, '').replace("search", '');

        return (
        <BrowserRouter>
        <div className="container">
            <Nav/>
        <Switch>
        <Route exact path='/' render={ () => <Gallary data={this.state.photos} search={this.performSearch} text="vacation" loading={this.state.loading} title={"Friends"} />} ></Route>
        <Route exact path='/friends' render={ () => <Gallary data={this.state.photos} search={this.performSearch} text="friends" loading={this.state.loading} title={"Friends"} />} ></Route>
        <Route exact path='/people' render={ () => <Gallary data={this.state.photos} search={this.performSearch} text="people" loading={this.state.loading} title={"People"}/>} ></Route>
        <Route exact path='/sunset' render={ () => <Gallary data={this.state.photos} search={this.performSearch} text="sunset" loading={this.state.loading} title={"Sunset"}/>} ></Route>
        <Route exact path="/search/:text" render={() => <Gallary data={this.state.photos}  search={this.performSearch} text={searchText} loading={this.state.loading} title={this.state.title}/>} />
        <Route component = {NotFound}/>
        </Switch>
        </div>
        </BrowserRouter>
    );
    }
}

export default App;
