// 3. Uppdatera ett namn med callback 3p
// En namn ska visas på sidan och namnet ska vara kopplat till useState i App-komponenten.
// Skapa en komponent: ChangeName som har ett inputfält som ska användas för att ändra
// namnet i App-komponenten via en callback-funktion.

import React, { useState } from "react";
import ChangeName from "../components/ChangeName";

function App() {
  const [namn, setNamn] = useState("Johan Larsson ");

  const uppdateraNamn = (nyttNamn) => {
    setNamn(nyttNamn);
  };

  return (
    <div>
      <h1>{namn}</h1>
      <p>Uppdatera namnet:</p>
      <ChangeName onNameChange={uppdateraNamn} />
    </div>
  );
}

export default App;
