import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { placeOrder, } from '../../actions'

class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      billing_name: '',
      billing_phone: '',
      billing_email: '',
      billing_address: '',
      billing_city: '',
      billing_province: '',
      billing_country: '',
      billing_postalcode: '',
    };
  }

  componentDidMount() { 

  }

  onChange = (event) => {
    let value = event.target.value;

    this.setState({
      [event.target.name]: value,
    });
  }

  _placeOrder = () => { 
    let data  = {
      billing_name: this.state.billing_name,
      billing_phone: this.state.billing_phone,
      billing_email: this.state.billing_email,
      billing_address: this.state.billing_address,
      billing_city: this.state.billing_city,
      billing_province: this.state.billing_province,
      billing_country: this.state.billing_country,
      billing_postalcode: this.state.billing_postalcode,
    };

    placeOrder(data).then(response => {
      this.props.getCartItemsHandler();

      alert(response.message);

      // return <Redirect to='/' />;
    });
  }

  render() {
    return (
      <div className="orderPage mt-4">
        <div className="row">
        <div className="col-lg-12">
          <h2>Enter billing details</h2>
        </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="w-75">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" onChange={this.onChange} name="billing_name" id="name" placeholder="Billing name" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input type="text" className="form-control" onChange={this.onChange} name="billing_phone" id="phoneNumber" placeholder="Phone number" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="emailAddress">Email address</label>
                  <input type="email" className="form-control" onChange={this.onChange} name="billing_email" id="emailAddress" placeholder="Email address" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" onChange={this.onChange} name="billing_address" id="address" placeholder="Billing address" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="city">City</label>
                  <input type="text" className="form-control" onChange={this.onChange} name="billing_city" id="city" placeholder="City" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="province">Province</label>
                  <input type="text" className="form-control" onChange={this.onChange} name="billing_province" id="province" placeholder="Billing address" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="country">Country</label>
                  <input type="text" className="form-control" onChange={this.onChange} name="billing_country" id="country" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="postalCode">Postalcode</label>
                  <input type="text" className="form-control" onChange={this.onChange} name="billing_postalcode" id="postalCode" />
                </div>
              </div>
              <button type="button" className="btn btn-primary float-right" onClick={this._placeOrder}>Place Order</button>
            </div>
            <div className="w-75">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Order
