// Återanvändbara komponenter 3p
// 1. Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 2. Skapa en komponent ButtonWithChildren som änvänder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 3. Skapa en komponent Article som tar en title och en text som props
// Använd komponenten 2 gånger med olika title och text.

import Button from "../components/Button";
import ButtonWithChildren from "../components/ButtonWithChildren";
import Article from "../components/Article";

function App() {
  return (
    <div>
      <h1> Button </h1>
      <Button title="Button one" color="red" />
      <Button title="Button two" color="yellow" />

      <h1>ButtonWithChildren </h1>
      <ButtonWithChildren color="#ab87e7">Button one</ButtonWithChildren>
      <ButtonWithChildren color="green">Button two</ButtonWithChildren>

      <h1>Article </h1>
      <Article
        title="Artikel nummer ett"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />
      <Article
        title="Artikel nummer två"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />
    </div>
  );
}

export default App;
