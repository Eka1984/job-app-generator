import "./tailwind.css";
import Form from "./components/Form";
import Output from "./components/Output";
import { useState } from "react";
import { generateApplicationLetter } from "./api.js";
import Header from "./components/Header.jsx";

function App() {
  const [letter, setLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (data) => {
    setLoading(true);
    const result = await generateApplicationLetter(data);
    setLetter(result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#f5e0b8] flex flex-col p-6">
      <Header />
      {loading ? (
        <p className="text-center mt-40 text-[#BF3131] text-bold text-2xl">
          Generating your cover letter...
        </p>
      ) : !letter ? (
        <Form onGenerate={handleGenerate} />
      ) : (
        <Output letter={letter} />
      )}
    </div>
  );
}

export default App;
