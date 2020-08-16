import qs from 'querystring';
import API from '../axios';

export function addToCart(data) {
  return API.post(`/carts`, qs.stringify(data), {
    headers: {
      'Currency-Type': localStorage.getItem('currency_type') || 'USD',
    }
  })
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
}

export function removeFromCart(data) {
  return API.delete(`/carts/${data.cart_id}`, {
    headers: {
      'Currency-Type': localStorage.getItem('currency_type') || 'USD',
    }
  })
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
}

export function getCartItems() {
  return API.get(`/carts`, {
    headers: {
      'Currency-Type': localStorage.getItem('currency_type') || 'USD',
    }
  })
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
}

export function getProductList() { 
  return API.get('/products', {
    headers: {
      'Currency-Type': localStorage.getItem('currency_type') || 'USD',
    }
  })
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
};

export function getProduct(data) { 
  return API.get(`/products/${data.slug}`, {
    headers: {
      'Currency-Type': localStorage.getItem('currency_type') || 'USD',
    }
  })
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
};

export function placeOrder(data) { 
  
  return API.post(`/orders`, qs.stringify(data), {
    headers: {
      'Currency-Type': localStorage.getItem('currency_type') || 'USD',
    }
  })
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
}

export function getOrderList() { 
  return API.get('/orders', {
    headers: {
      'Currency-Type': localStorage.getItem('currency_type') || 'USD',
    }
  })
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      return (error && error.response && error.response.data) || {};
    });
};
