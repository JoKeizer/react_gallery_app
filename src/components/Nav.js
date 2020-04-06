import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import SearchForm from './SearchForm'

class Nav extends Component {
  handleRoute = text => {
    this.props.history.push(`/search/${text}`);
  }
    render() {
      
        return (
          <div>          <SearchForm onSubmit={this.handleRoute}/>
                      <nav className="main-nav">
            <ul>
              <li><NavLink to='/friends'>Friends</NavLink></li>
              <li><NavLink to='/people'>People</NavLink></li>
              <li><NavLink to='/sunset'>Sunset</NavLink></li>
            </ul>
          </nav>
          </div>


        )
      
    }
}

export default withRouter(Nav);
