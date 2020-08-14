import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { getProduct, addToCart, } from '../../actions'

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  componentDidMount() { 
    let slug = this.props.match.params.slug;
    let data = {
      slug,
    };

    getProduct(data).then(response => {
      this.setState({
        item: (response && response.data) || {},
      });
    });
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

  render() { 
    const { item } = this.state;

    return (
      <div className="productDetailsPage mt-4">
        <div className="row">
          <div className="col-lg-12">
            <h2>Product details</h2>
            <Link to="/" className="btn btn-info">Back</Link>
            <button type="button" className="btn btn-primary float-right mr-2" onClick={() => this._addToCart(item)}>Add to Cart</button>
            
          </div>
          <div className="col-lg-12">
            <div className="card mt-4">
              <img className="card-img-top img-fluid" src={ item.full_image_path } alt="" />
              <div className="card-body">
                <h3 className="card-title">{ item.title }</h3>
                <h4>${ item.unit_price }</h4>
                <p className="card-text">
                  { item.description }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
