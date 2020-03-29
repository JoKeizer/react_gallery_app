import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return (
            <nav className="main-nav">
            <ul>
              <li><NavLink exact to ='/' >Home</NavLink></li>
              <li><NavLink to='/friends'>Friends</NavLink></li>
              <li><NavLink to='/people'>People</NavLink></li>
              <li><NavLink to='/sunset'>Sunset</NavLink></li>
            </ul>
          </nav>
        )
      
    }
}