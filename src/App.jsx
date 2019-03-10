import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Product from './Product';
import Navbar from './hoc/Navbar';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import Footer from './hoc/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/cart" exact component={Cart} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
