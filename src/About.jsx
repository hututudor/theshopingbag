import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="contr">
        <h1>Cine suntem?</h1>
        <p>
          O echipa mereu pregatita si creativa, gata sa va ajute in orice
          moment!
        </p>
        <br />
        <h1>Ce facem?</h1>
        <p>
          Echipa The Shopping Bag lucreaza pentru a va oferi cele mai bune
          servicii pentru a comanda orice fel de produse online. Va oferim
          posibilitatea de a economisi timp si de a primi ceea ce doriti intr-un
          timp satisfacator si la un pret bun.
        </p>
        <br />
        <h1>Sutem dedicati oamenilor nostri!</h1>{' '}
        <p>
          The Shopping Bag este angajatorul care stimuleaza studiul,
          performanta, munca în echipa si dezvoltarea profesionala.
        </p>
        <br />
        <h1>In fiecare zi ne straduim sa fim mai buni!</h1>{' '}
        <p>Suntem o organizatie aflata intr-o continuua invatare.</p>
      </div>
    );
  }
}

export default About;
