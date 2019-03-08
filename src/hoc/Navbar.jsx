import React, { Component } from 'react';
import { Menu, Container, Dropdown, Icon } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
