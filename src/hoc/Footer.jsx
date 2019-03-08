import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-md-6">
            Copyright {'\u00A9'} {new Date().getFullYear()} The Shopping Bag.
          </div>
          <div className="col-md-6">Facut de Tudor Hutu</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
