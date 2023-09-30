import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

// Määritellään Edit-komponentti, joka mahdollistaa tietueen muokkaamisen.
export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  // Tämä useEffect suoritetaan, kun komponentti latautuu.
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5050/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      // Haetaan ja päivitetään tietueen tiedot.
      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // Nämä metodit päivittävät tilan ominaisuuksia.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      position: form.position,
      level: form.level,
    };

    // Lähetetään PATCH-pyyntö päivitetyn tiedon tallentamiseksi tietokantaan.
    await fetch(`http://localhost:5050/record/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Siirrytään takaisin etusivulle.
    navigate("/");
  }

  // Tämä osio näyttää lomakkeen, joka ottaa käyttäjältä syötettä tietojen päivittämiseksi.
  return (
    <div>
      <h3>Update Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ position: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionBarbarian"
              value="Barbarian"
              checked={form.level === "Barbarian"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionBarbarian" className="form-check-label">
              Barbarian
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionDruid"
              value="Druid"
              checked={form.level === "Druid"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionDruid" className="form-check-label">
              Druid
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionNecromancer"
              value="Necromancer"
              checked={form.level === "Necromancer"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionNecromancer" className="form-check-label">
              Necromancer
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionRogue"
              value="Rogue"
              checked={form.level === "Rogue"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionRogue" className="form-check-label">
              Rogue
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionSorceress"
              value="Sorceress"
              checked={form.level === "Sorceress"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionSorceress" className="form-check-label">
              Sorceress
            </label>
          </div>
        </div>
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
