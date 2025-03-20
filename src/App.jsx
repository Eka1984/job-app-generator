import "./tailwind.css";
import Form from "./components/Form";
import Output from "./components/Output";
import { useState } from "react";
import { generateApplicationLetter } from "./api.js";
import Header from "./components/Header.jsx";

function App() {
  const [letter, setLetter] = useState("");

  const handleGenerate = async (data) => {
    const result = await generateApplicationLetter(data);
    setLetter(result);
    console.log(result);
  };

  return (
    <div className="min-h-screen w-full bg-[#f5e0b8] flex flex-col p-6">
      <Header />
      {!letter ? (
        <Form onGenerate={handleGenerate} />
      ) : (
        <Output letter={letter} />
      )}
    </div>
  );
}

export default App;
