import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <Menu
        size="large"
        borderless
        inverted
        fixed="top"
        stackable
        color="green"
      >
        <Container textAlign="center">
          <Menu.Item header>
            <span className="logo">
              <span>The</span>Shopping<span>Bag</span>
            </span>
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/">
            Acasa
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/products">
            Produse
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/about">
            Despre noi
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/contact">
            Contact
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
