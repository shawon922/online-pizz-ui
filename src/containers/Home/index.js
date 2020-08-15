import React, { Component } from 'react'

import SweetAlert from 'react-bootstrap-sweetalert';

import { getProductList, addToCart, } from '../../actions'

import Loader from '../../components/Loader';
import ProductItem from '../../components/ProductItem';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      success: true,
      show: false,
      message: '',
      showLoader: true,
    };
  }

  componentDidMount() { 
    this._getProductList();

    this.props.getCartItemsHandler();
  }

  _addToCart = (item) => { 
    let data = {
      product_id: item.id,
    };

    addToCart(data).then(response => {
      this.props.getCartItemsHandler();

      this.setState({
        show: true,
        success: response.success,
        message: response.message,
      });
    });
  }

  _getProductList = () => { 
    
    getProductList()
      .then(response => {
        this.setState({
          products: response.data || [],
          showLoader: false,
        });
      });
  };

  onConfirm = () => {
    this.setState({
      show: false,
      success: true,
      message: '',
    });
  }

  render() {
    const { products, show, message, success, showLoader, } = this.state;

    return (
      <div className="homePage mt-4">
        <SweetAlert
          title={success ? `Success!` : `Error!`}
          onConfirm={this.onConfirm}
          show={show}
        >
            <h3>{ message }</h3>
        </SweetAlert>
        <div className="row">
        <div className="col-lg-12">
          <h2>Pizza List</h2>
        </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">

              {
                showLoader && <Loader />
              }

              {
                !showLoader && products.map(item => <ProductItem item={item} key={item.id} handleAddToCart={this._addToCart} />)
              }

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home