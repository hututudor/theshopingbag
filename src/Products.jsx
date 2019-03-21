import React, {Component} from 'react';
import {products} from './prod.json';
import Product from './hoc/Prod.jsx';
import {Card, Container} from 'semantic-ui-react';

class Products extends Component {
  state = {
    products: products,
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
      products: products.filter(prod =>
        prod.name.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    });
  };

  render() {
    return (
      <div className="products">
        <h1>Produsele noastre</h1>
        <Container className="prodcontainer">
          <div className="input">
            <input
              placeholder="Cauta ..."
              value={this.state.value}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <Card.Group centered stackable itemsPerRow={3}>
            {this.state.products.map(prod => (
              <Product prod={prod} />
            ))}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default Products;
