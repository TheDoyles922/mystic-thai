import React, { Component } from 'react';
import '../styles/App.css';

import BaseLayout from './BaseLayout.js';
import Categories from './Categories.js';
let missionStatement = 'Mystic Thai offers bold and authentic flavors of Thai food located in beautiful downtown Greenville.  Our talented, experienced chefs create authentic Thai entrees using fresh ingredients and traditional recipes.  Exotic sauces and flavors intermingle on your plate creating an exciting taste journey you can experience only in our restaurant.';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: {
        Appetizers: [],
        Desserts: [],
        Entrees: []
      },
      category: []
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.setState({category: this.state.menuItems[event.target.value]})
  }

  componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu').then((result) => {
      result.json().then((response) => {
        this.setState({menuItems: response[0]});
        console.log('log1', this.state.menuItems);
      });
    });
  }

  render() {
    console.log('log2', this.state.menuItems);
    let categories = this.state.category.map((category) => {
      return <Categories key={category.dish} category={category}/>
    });

    return (
      <div className="App">

        <BaseLayout>
        </BaseLayout>
        <div className="item-display">
          <div className="display-buttons">
            <input value="Appetizers" type="button" onClick={this.handleSelect} />
            <input value="Entrees" type="button" onClick={this.handleSelect} />
            <input value="Desserts" type="button" onClick={this.handleSelect} />
          </div>
          {categories}
        </div>
      </div>
    );
  }
}

export default App;
