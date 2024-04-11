// 1. En lista med filmer (3p)
// Sidan ska visa en lista med filmer
// Användaren ska kunna lägga till nya filmer i listan genom att skriva in filmens namn
// i ett inputfält och sedan klicka på en "Lägg till"-knapp.
// Varje film i listan ska ha en ta bort knapp som tar bort den filmen ur listan

import React, { useState } from "react";

function App() {
  const [filmer, setFilmer] = useState([]);
  const [newFilm, setNewFilm] = useState("");

  const addFilm = () => {
    setFilmer([...filmer, newFilm]);
    setNewFilm("");
  };

  const removeFilm = (index) => {
    const newFilmer = filmer.filter((film, i) => i !== index);
    setFilmer(newFilmer);
  };

  return (
    <div>
      <input
        type="text"
        value={newFilm}
        onChange={(e) => setNewFilm(e.target.value)}
        placeholder="Ange filmens namn"
      />
      <button onClick={addFilm}>Add</button>
      <ul>
        {filmer.map((film, index) => (
          <li key={index}>
            {film} <button onClick={() => removeFilm(index)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
