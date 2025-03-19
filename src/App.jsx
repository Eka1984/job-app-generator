import "./tailwind.css";
import Form from "./components/Form";
import Output from "./components/Output";
import { useState } from "react";
import { generateApplicationLetter } from "./api.js";

function App() {
  const [letter, setLetter] = useState("");

  const handleGenerate = async (data) => {
    const result = await generateApplicationLetter(data);
    setLetter(result);
  };

  return (
    <div>
      <Form onGenerate={handleGenerate} />
      {letter && <Output letter={letter} />}
    </div>
  );
}

export default App;
