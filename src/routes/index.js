import React from 'react';
import { Route } from 'react-router'
import { Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Order from '../containers/Order';
import NotFound from '../containers/NotFound';
import Product from '../containers/Product';


const AppRouter = (props) => { 
  const { getCartItemsHandler, cart_items } = props;

  return (<Switch>
    <Route key="home" exact={true} path="/" render={(props) => <Home {...props} getCartItemsHandler={getCartItemsHandler} />} />
    <Route key="cart" path="/cart" render={(props) => <Cart {...props} getCartItemsHandler={getCartItemsHandler} cart_items={cart_items} />} />
    <Route key="order" path="/order" render={(props) => <Order {...props} getCartItemsHandler={getCartItemsHandler} cart_items={cart_items} />} />
    <Route key="product-details" path="/product/:slug" render={(props) => <Product {...props} getCartItemsHandler={getCartItemsHandler} />} />
    <Route component={NotFound} />
  </Switch>)
};

export default AppRouter;