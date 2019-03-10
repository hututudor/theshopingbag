import React, { Component } from 'react';
import { products } from './prod.json';
import { Container } from 'semantic-ui-react';
import { addProd } from './actions';
import { connect } from 'react-redux';

class Product extends Component {
  state = {
    prod: ''
  };

  componentDidMount() {
    this.setState({ prod: products[this.props.match.params.id] });

    if (!products[this.props.match.params.id]) {
      this.props.history.goBack();
    }
  }

  addToCart = () => {
    this.props.add(this.state.prod);
  };

  render() {
    return (
      <div className="product">
        <Container>
          <img src={this.state.prod.img} />
          <div className="hdr">
            <div className="row">
              <div className="col-md-12">
                <h1>{this.state.prod.name}</h1>
              </div>
            </div>
          </div>
          <div className="det">
            <span>{this.state.prod.price} Lei</span>
            <span>Doar {this.state.prod.count} ramase in stoc</span>
          </div>
          <div className="desc">
            <p>{this.state.prod.desc}</p>
          </div>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: prod => dispatch(addProd(prod))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
