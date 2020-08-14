import React, { Component } from 'react'

import { getProductList, addToCart, } from '../../actions'

import ProductItem from '../../components/ProductItem';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() { 
    this._getProductList();
  }

  _addToCart = (item) => { 
    let data = {
      product_id: item.id,
    };

    addToCart(data).then(response => {
      this.props.getCartItemsHandler();

      alert(response.message);
    });
  }

  _getProductList = () => { 
    
    getProductList()
      .then(response => {
        this.setState({
          products: response.data || [],
        });
      });
  };

  render() {
    const { products } = this.state;
    
    return (
      <div className="homePage mt-4">
        <div className="row">
        <div className="col-lg-12">
          <h2>Pizza List</h2>
        </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {
                products.map(item => <ProductItem item={item} key={item.id} handleAddToCart={this._addToCart} />)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home