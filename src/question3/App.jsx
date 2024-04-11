// 3. Custom Hook useInput (3p)
// Skapa en hook useInput som tar hand om state för ett input-fält.
// useInput ska returnera funktionen för att uppdatera state och
// själva värdet från state.
// Använd sedan useInput i App-komponenten nedan för att spara det man
// skriver in i ett input-fält. Det man skriver in ska visas under inputfältet.

import React, { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleContent = (event) => {
    setValue(event.target.value);
  };
  return [value, handleContent];
}

function App() {
  const [content, setContent] = useInput("");
  return (
    <div>
      <input type="text" value={content} onChange={setContent} />
      <h3>Context</h3>
      <p>{content}</p>
    </div>
  );
}

export default App;
