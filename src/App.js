import React from "react";

// Käytämme Routea määritelläksemme sovelluksemme eri reitit.
import { Route, Routes } from "react-router-dom";

// Tuomme kaikki tarvittavat komponentit sovellukseemme.
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

// Tuomme App.css-tyylitiedoston, jota käytetään komponenttien ulkoasun määrittelyyn.
import "./App.css";

// Määritellään App-komponentti, joka on sovelluksemme juurikomponentti.
const App = () => {
  return (
    <div>
      {/* Lisätään Navbar-komponentti, joka toimii sovelluksemme yläpalkkina. */}
      <Navbar />
      <Routes>
        {/* Määritellään reitti juuripolulle ("/") ja asetetaan siihen liitettäväksi RecordList-komponentti. */}
        <Route exact path="/" element={<RecordList />} />
        {/* Määritellään reitti "/edit/:id" polulle ja asetetaan siihen liitettäväksi Edit-komponentti. */}
        <Route path="/edit/:id" element={<Edit />} />
        {/* Määritellään reitti "/create" polulle ja asetetaan siihen liitettäväksi Create-komponentti. */}
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

// Viedään App-komponentti, jotta se voidaan käyttää muualla sovelluksessa.
export default App;
