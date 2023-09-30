// Tuodaan React-kirjasto sovelluksen rakentamista varten.
import React from "react";
// Tuodaan ReactDOM, joka mahdollistaa React-sovelluksen renderöimisen HTML:ään.
import ReactDOM from "react-dom";
// Tuodaan App-komponentti, joka on meidän sovelluksemme juurikomponentti.
import App from "./App";
// Tuodaan BrowserRouter React Router -kirjastosta, joka mahdollistaa reittien hallinnan.
import { BrowserRouter } from "react-router-dom";

// Renderöidään sovellus juurielementtiin, joka löytyy HTML-tiedostosta id:n "root" perusteella.
ReactDOM.render(
  // Käytetään Reactin "StrictModea", joka auttaa tunnistamaan ja korjaamaan sovelluksen suoritusvirheitä.
  <React.StrictMode>
    {/* Ympäröidään sovellus BrowserRouter-komponentilla, joka mahdollistaa reittien käytön. */}
    <BrowserRouter>
      {/* Renderöidään App-komponentti, joka muodostaa sovelluksemme pohjan. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // Määritetään, minne sovellus renderöidään HTML:ssä, tässä tapauksessa elementtiin, jolla on id "root".
  document.getElementById("root")
);
