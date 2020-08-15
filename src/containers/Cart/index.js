import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';

import { removeFromCart, addToCart, } from '../../actions'

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart_items: [],
      success: true,
      show: false,
      message: '',
    };
  }

  componentDidMount() { 
    this.setState({
      cart_items: this.props.cart_items || [],
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      cart_items: nextProps.cart_items,
    }
  }

  onChangeHandler = (event, index) => { 
    let { cart_items } =this.state;
    let value = event.target.value;

    let item = cart_items[index];
    item.quantity = value;
    item.product_total = Number.parseFloat(value || 0) * Number.parseFloat(item.unit_price);

    cart_items[index] = item;

    this.setState({
      cart_items,
    });

  }

  _updateCart = (event, item) => { 
    
    let data = {
      product_id: item.product_id,
      quantity: item.quantity,
    };

    addToCart(data).then(response => {
      this.props.getCartItemsHandler();
    });
  }

  _removeFromCart = (cartItem) => { 
    let data = {
      cart_id: cartItem.id,
    };

    removeFromCart(data).then(response => { 
      if (response.success) {
        this.props.getCartItemsHandler();
      }

      this.setState({
        show: true,
        success: response.success,
        message: response.message,
      });
    });
  }

  onConfirm = () => {
    this.setState({
      show: false,
      success: true,
      message: '',
    });
  }

  render() {
    const { cart_items, show, message, success, } = this.state;
    let shippingCost = 10.00, subtotal = 0, currency = '$';

    return (
      <div className="cartPage">
        <SweetAlert
          title={success ? `Success!` : `Error!`}
          onConfirm={this.onConfirm}
          show={show}
        >
            <h3>{ message }</h3>
        </SweetAlert>
        <div className="row">
        <div className="col-lg-12">
          <h2>Cart Items</h2>
        </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              { cart_items && cart_items.length > 0 ?
                <table className="table">
                  <thead>
                    <tr>
                      <th width="10%" scope="col">#</th>
                      <th width="15%" scope="col">Image</th>
                      <th width="20%" scope="col">Title</th>
                      <th width="15%" scope="col">Quantity</th>
                      <th width="15%" scope="col">Unit price</th>
                      <th width="15%" scope="col">Product total</th>
                      <th width="5%" scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart_items.map((item, index) => { 
                        subtotal += Number.parseFloat(item.product_total);

                        return (
                          <tr key={`${index}-${item.id}`}>
                            <th scope="row">{ index + 1 }</th>
                            
                            <td><img src={ item.product.full_image_path } className="cart-product-image" alt="" /></td>
                            
                            <td>{ item.product.title }</td>
                            
                            <td><input type="number" min="1" value={ item.quantity } className="form-control w-75" name={`quantity_${item.id}`} onChange={(event) => this.onChangeHandler(event, index)} onBlur={(event) => this._updateCart(event, item) } /></td>
                            
                            <td>{ item.currency || `$` }{ item.unit_price }</td>
                            
                            <td>{ item.currency || `$` }{ Number.parseFloat(item.product_total).toFixed(2) }</td>
                            
                            <td>
                              <button type="button" className="btn btn-danger" onClick={() => this._removeFromCart(item)}>&times;</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                    <tr>
                      <td colSpan="5" className="text-right"><b>Sub-total</b></td>
                  <td className="text-right"><b>{ currency }{ Number.parseFloat(subtotal).toFixed(2) }</b></td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colSpan="5" className="text-right"><b>VAT (15%)</b></td>
                  <td className="text-right"><b>{ currency }{ Number.parseFloat((subtotal * 15) / 100).toFixed(2) }</b></td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colSpan="5" className="text-right"><b>Shipping cost</b></td>
                  <td className="text-right"><b>{ currency }{ shippingCost }</b></td>
                      <td>&nbsp;</td>
                    </tr>

                    <tr>
                      <td colSpan="5" className="text-right"><b>Total</b></td>
                  <td className="text-right"><b>{ currency }{ Number.parseFloat(subtotal + ((subtotal * 15) / 100) + shippingCost).toFixed(2) }</b></td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colSpan="7" className="text-right">
                        <Link to="/" className="btn btn-info">Continue shopping</Link>
                        
                        <Link to="/place-order" className="btn btn-primary ml-2">Checkout</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                :
                <div className="row w-100">
                  <h1 className="text-center w-100 mt-4">Cart is empty</h1>
                  
                  <div className="w-100 text-center mt-4">
                    <Link to="/" className="btn btn-info">Continue shopping</Link>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart