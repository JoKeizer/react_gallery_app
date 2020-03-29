import React, { Component } from 'react';
import {BrowserRouter,  Route, Switch } from 'react-router-dom';

import Nav from './components/Nav'
import Gallary from './components/Gallary'
import SearchForm from './components/SearchForm'
import NotFound from './components/NotFound'

import apiKey from './config';
import axios from 'axios'
import './App.css';


export default class App extends Component {

  //State content that will update the DOM
  constructor() {
    super();
    this.state = {
      photos: [],
      query: '',
      loading: true,
      home: {
        photos: [],
        loading: true,
      },
      friends: {
        photos: [],
        loading: true,
      },
      people: {
        photos: [],
        loading: true,
      },
      sunset: {
        photos: [],
        loading: true,
      }
    };  
  };

  //ComponentDidMount will always run with axios we will get the date from Flickr API
  componentDidMount() {
    this.performSearch();

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=vacation&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
    .then(response => {
            let home ={...this.state.home};
              home.photos = response.data.photos.photo;
              home.loading= false;
              this.setState({home});
        })

        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=friends&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
        .then(response => {
                let friends ={...this.state.friends};
                  friends.photos = response.data.photos.photo;
                  friends.loading= false;
                  this.setState({friends});
            })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=people&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
          .then(response => {
                let people ={...this.state.people};
                people.photos = response.data.photos.photo;
                people.loading= false;
                      this.setState({people});
                })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunset&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
          .then(response => {
                 let sunset ={...this.state.sunset};
                 sunset.photos = response.data.photos.photo;
                 sunset.loading= false;
                      this.setState({sunset});
                    })
    .catch(error => {
        console.log('Error fetching data')
    })
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1`)
    .then(response => {
        this.setState({
            photos: response.data.photos.photo,
            loading: false,
            title: query
        })
      })

    .catch(error => {
        console.log('Error fetching data')
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm 
            onSearch={this.performSearch}
          />
          <Nav/>
          <Switch>
            <Route exact path='/' render={ () => <Gallary data={this.state.home.photos} title={'vacation'} />} ></Route>
            <Route exact path='/friends' render={ () => <Gallary data={this.state.friends.photos} title={'friends'} />} ></Route>
            <Route exact path='/people' render={ () => <Gallary data={this.state.people.photos} title={"people"} />} ></Route>
            <Route exact path='/sunset' render={ () => <Gallary data={this.state.sunset.photos} title={"sunset"} />} ></Route>
            <Route exact path='/search/:query' render={ () => <Gallary data={this.state.photos} title={this.state.title} />} ></Route>
            <Route component = {NotFound}/>                                               
          </Switch>
          </div>
      </BrowserRouter>      
    );
  }
}