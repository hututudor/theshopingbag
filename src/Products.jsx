import React, { Component } from 'react';
import { products } from './prod.json';
import Product from './hoc/Prod.jsx';
import { Card, Container } from 'semantic-ui-react';

class Products extends Component {
  render() {
    return (
      <div className="products">
        <h1>Produsele noastre</h1>
        <Container>
          <Card.Group centered stackable itemsPerRow={3}>
            {products.map(prod => (
              <Product prod={prod} />
            ))}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default Products;
