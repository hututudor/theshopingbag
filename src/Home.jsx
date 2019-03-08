import React, { Component } from 'react';
import { products } from './prod.json';
import { Card, Container } from 'semantic-ui-react';
import Product from './hoc/Prod';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-img">
          <h1>The Shopping Bag</h1>
          <h1>Cumpara inteligent</h1>
        </div>
        <div className="featured">
          <h1>Produse populare</h1>
          <Container>
            <Card.Group centered stackable itemsPerRow={3}>
              {products.map(prod => (
                <React.Fragment>
                  {prod.featured ? <Product prod={prod} /> : null}
                </React.Fragment>
              ))}
            </Card.Group>
          </Container>
          <div className="button">
            <Link to="/products">Vezi toate produsele</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
