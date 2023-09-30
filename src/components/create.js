import React, { useState } from "react";
import { useNavigate } from "react-router";

// Määritellään Create-komponentti, joka mahdollistaa uuden tietueen luomisen.
export default function Create() {
  const [form, setForm] = useState({
    name: "",
    character: "",
    level: "",
  });
  const navigate = useNavigate();

  // Nämä metodit päivittävät tilan ominaisuuksia.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // Tämä funktio käsittelee lomakkeen lähetyksen.
  async function onSubmit(e) {
    e.preventDefault();

    // Kun POST-pyyntö lähetetään luonti-URL:lle, lisätään uusi tietue tietokantaan.
    const newPerson = { ...form };

    await fetch("http://localhost:5050/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    // Tyhjennetään lomake ja siirrytään takaisin etusivulle.
    setForm({ name: "", level: "", characterclass: "" });
    navigate("/");
  }

  // Tämä osio näyttää lomakkeen, joka ottaa käyttäjältä syötettä uuden tietueen luomiseksi.
  return (
    <div>
      <h3>Add New Character</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Level</label>
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
        <div className="form-group">
          <input
            type="submit"
            value="Create character"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
