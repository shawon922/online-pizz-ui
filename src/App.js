import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './routes';
import TopNavBar from './components/TopNavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { getCartItems, } from './actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number_of_items: 0,
      cart_items: [],
    };
  }

  componentDidMount() {
    this._getCartItems();
  }

  _getCartItems = () => {
    getCartItems()
      .then(response => {
        this.setState({
          number_of_items: (response.data && response.data.length) || 0,
          cart_items: (response.data && response.data) || [],
        })
      });
  }

  render() { 
    const { number_of_items, cart_items } = this.state;

    return (
      <Router>
        <TopNavBar number_of_items={number_of_items} />
        <div className="container">
          <AppRouter getCartItemsHandler={this._getCartItems} cart_items={cart_items} />
        </div>
      </Router>
    );
  }
}

export default App;
