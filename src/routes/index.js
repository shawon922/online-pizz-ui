import React from 'react';
import { Route } from 'react-router'
import { Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import CreateOrder from '../containers/Order/Create';
import NotFound from '../containers/NotFound';
import Product from '../containers/Product';
import OrderList from '../containers/Order';


const AppRouter = (props) => { 
  const { getCartItemsHandler, cart_items } = props;

  return (<Switch>
    <Route key="home" exact={true} path="/" render={(props) => <Home {...props} getCartItemsHandler={getCartItemsHandler} />} />
    <Route key="cart" path="/cart" render={(props) => <Cart {...props} getCartItemsHandler={getCartItemsHandler} cart_items={cart_items} />} />
    <Route key="place-order" path="/place-order" render={(props) => <CreateOrder {...props} getCartItemsHandler={getCartItemsHandler} cart_items={cart_items} />} />
    <Route key="order-list" path="/order-list" render={(props) => <OrderList {...props} getCartItemsHandler={getCartItemsHandler} />} />
    <Route key="product-details" path="/product/:slug" render={(props) => <Product {...props} getCartItemsHandler={getCartItemsHandler} />} />
    <Route component={NotFound} />
  </Switch>)
};

export default AppRouter;