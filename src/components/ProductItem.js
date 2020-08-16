import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  componentDidMount() {

  }

  render() { 
    const { item,  } = this.props;
    // const { show, } = this.state;


    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src={ item.full_image_path } alt="" />
          <div className="card-body">
            <h4 className="card-title">
              { item.title }
            </h4>
            <h5>{ item.currency_symbol }{ item.currency_unit_price }</h5>
            <p className="card-text">{ item.description }</p>
          </div>
          <div className="card-footer">
            <Link to={`/product/${item.slug}`} className="btn btn-info">Details</Link>
            <button type="button" className="btn btn-primary float-right" onClick={() => this.props.handleAddToCart(item)}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default ProductItem;