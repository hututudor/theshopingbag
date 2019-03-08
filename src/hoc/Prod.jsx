import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { products } from '../prod.json';

class Product extends Component {
  render() {
    return (
      <Card
        // color="green"
        style={{ overflowX: 'hidden' }}
        as={NavLink}
        to={'/product/' + products.indexOf(this.props.prod)}
      >
        <Image src={this.props.prod.img} />
        <Card.Content>
          <Card.Header>{this.props.prod.name}</Card.Header>
          <Card.Meta>{this.props.prod.price} Lei</Card.Meta>
          <Card.Description>{this.props.prod.desc}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Product;
