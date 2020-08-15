import qs from 'querystring';
import API from '../axios';

export function addToCart(data) {
  return API.post(`/carts`, qs.stringify(data))
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
}

export function removeFromCart(data) {
  return API.delete(`/carts/${data.cart_id}`)
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
}

export function getCartItems() {
  return API.get(`/carts`)
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
}

export function getProductList() { 
  return API.get('/products')
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
};

export function getProduct(data) { 
  return API.get(`/products/${data.slug}`)
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
};

export function placeOrder(data) { 
  
  return API.post(`/orders`, qs.stringify(data))
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
}

export function getOrderList() { 
  return API.get('/orders')
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
};
