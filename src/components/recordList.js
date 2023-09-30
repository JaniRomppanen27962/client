import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Määritellään Record-komponentti, joka esittää yhden tietueen taulukossa.
const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>
      {/* Luodaan Link-komponentti, joka mahdollistaa siirtymisen tietueen muokkaussivulle. */}
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
      |
      {/* Luodaan poista-nappi, joka kutsuu deleteRecord-funktiota tietueen poistamiseksi. */}
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

// Määritellään RecordList-komponentti.
export default function RecordList() {
  const [records, setRecords] = useState([]); // Tilamuuttuja records ja sen päivitysfunktio setRecords

  // Tämä useEffect suoritetaan, kun komponentti latautuu.
  useEffect(() => {
    async function getRecords() {
      // Haetaan tietueet tietokannasta.
      const response = await fetch(`http://localhost:5050/record/`);

      if (!response.ok) {
        const message = `Tapahtui virhe: ${response.statusText}`;
        window.alert(message);
        return;
      }

      // Parsitaan vastaus JSON-muotoon ja päivitetään records-tilamuuttuja.
      const records = await response.json();
      setRecords(records);
    }

    // Kutsutaan getRecords-funktiota.
    getRecords();

    return;
  }, [records.length]);

  // Tämä funktio poistaa tietueen.
  async function deleteRecord(id) {
    // Lähetetään DELETE-pyyntö tietokantaan tietueen poistamiseksi.
    await fetch(`http://localhost:5050/record/${id}`, {
      method: "DELETE",
    });

    // Suodatetaan poistettu tietue records-tilamuuttujasta ja päivitetään se.
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // Tämä funktio muodostaa taulukon tietueista käyttäen Record-komponenttia.
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // Tämä osio näyttää taulukon yksilöiden tietueista.
  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Character</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
