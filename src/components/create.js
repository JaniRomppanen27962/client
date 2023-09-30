import React, { useState } from "react";
import { useNavigate } from "react-router";

 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   character: "",
   level: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", level: "", characterclass: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
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
           <label htmlFor="positionBarbarian" className="form-check-label">Barbarian</label>
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
           <label htmlFor="positionDruid" className="form-check-label">Druid</label>
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
           <label htmlFor="positionNecromancer" className="form-check-label">Necromancer</label>
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
           <label htmlFor="positionRogue" className="form-check-label">Rogue</label>
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
           <label htmlFor="positionSorceress" className="form-check-label">Sorceress</label>
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