import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className="banner fixed-top">
        <NavLink exact to="/"><div className="img-container"></div></NavLink>
        <h1 className="banner-name">Mystic Thai</h1>
      </nav>
    );
  }
}
