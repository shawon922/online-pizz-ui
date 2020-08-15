import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import SweetAlert from 'react-bootstrap-sweetalert';

import { getOrderList, } from '../../actions'

import Loader from '../../components/Loader';

class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      success: true,
      show: false,
      message: '',
      showLoader: true,
    };
  }

  componentDidMount() { 
    this.props.getCartItemsHandler();

    this._getOrderList();
  }

  _getOrderList = () => { 
    
    getOrderList()
      .then(response => {
        this.setState({
          orders: response.data || [],
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
    const { orders, show, message, success, showLoader, } = this.state;
    
    if (showLoader) {
      return (
        <Loader />
      );
    }

    return (
      <div className="OrderPage mt-4">
        <SweetAlert
          title={success ? `Success!` : `Error!`}
          onConfirm={this.onConfirm}
          show={show}
        >
            <h3>{ message }</h3>
        </SweetAlert>
        <div className="row">
        <div className="col-lg-12">
          <h2>Order List</h2>
        </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              { orders && orders.length > 0 ?
                <table className="table">
                  <thead>
                    <tr>
                      <th width="10%" scope="col">#</th>
                      <th width="20%" scope="col">Order number</th>
                      <th width="20%" scope="col">Name</th>
                      <th width="20%" scope="col">Email</th>
                      <th width="15%" scope="col">Total price</th>
                      <th width="15%" scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orders.map((item, index) => { 
                        
                        return (
                          <tr key={`${index}-${item.id}`}>
                            <th scope="row">{ index + 1 }</th>
                            <td>{ item.order_number }</td>                     
                            <td>{ item.billing_name }</td>                     
                            <td>{ item.billing_email }</td>                     
                            
                            <td>{ item.currency || `$` }{ Number.parseFloat(item.total).toFixed(2) }</td>
                            <td>{ item.shipped ? `Delivered` : `Under processing` } </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
                :
                <div className="row w-100">
                  <h1 className="text-center w-100 mt-4">No order found.</h1>
                  
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

export default Order