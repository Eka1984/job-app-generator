import "./tailwind.css";
import Form from "./components/Form";
import Output from "./components/Output";
import { useState } from "react";
import { generateApplicationLetter } from "./api.js";
import Header from "./components/Header.jsx";

function App() {
  const [letter, setLetter] = useState("");
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (data) => {
    setLoading(true);
    setFormData(data);
    const result = await generateApplicationLetter(data);
    setLetter(result);
    setLoading(false);
  };

  const handleReset = () => {
    setLetter("");
  };

  return (
    <div className="min-h-screen w-full bg-[#f5e0b8] flex flex-col p-6">
      <Header />
      {loading ? (
        <p className="text-center mt-40 text-[#BF3131] text-bold text-2xl">
          Generating your cover letter...
        </p>
      ) : !letter ? (
        <Form onGenerate={handleGenerate} initialData={formData} />
      ) : (
        <Output letter={letter} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
