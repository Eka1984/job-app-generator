import { useState } from "react";

const Form = ({ onGenerate }) => {
  const [tone, setTone] = useState("Professional");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [cv, setCv] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [coverLetterTo, setCoverLetterTo] = useState("Hirinf ");
  const [jobOffer, setJobOffer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ tone, name, company, cv, jobTitle, coverLetterTo, jobOffer });
  };

  return (
    <div className="min-h-screen bg-[#f5e0b8] text-white flex flex-col items-center p-6">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-[#BF3131] text-center">
        Dear Hiring Manager ✍🏼
      </h1>
      <h2 className="text-lg text-black text-center mt-2">
        Generate a professional cover letter in seconds.
      </h2>

      {/* Form */}
      <form
        className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-6xl xl:max-w-7xl bg-[#f5e0b8] p-6 mt-6"
        onSubmit={handleSubmit}
      >
        {/* Select Tone */}
        <label className="block text-[#BF3131] mb-2">Select a tone*</label>
        <select
          className="w-full p-2 bg-[#EEEEEE] text-black border border-gray-500 rounded-lg mb-4 shadow-sm"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option>Professional</option>
          <option>Convincing</option>
          <option>Casual</option>
        </select>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            className="w-full p-3 bg-[#EEEEEE] text-black border border-gray-500 rounded-lg shadow-sm"
            placeholder="Your Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="w-full p-3 bg-[#EEEEEE] text-black border border-gray-500 rounded-lg shadow-sm"
            placeholder="Applying for Company*"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <input
            type="text"
            className="w-full p-3 bg-[#EEEEEE] text-black border border-gray-500 rounded-lg shadow-sm"
            placeholder="Job Title*"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
          <input
            type="text"
            className="w-full p-3 bg-[#EEEEEE] text-black border border-gray-500 rounded-lg shadow-sm"
            placeholder="Write Cover Letter To*"
            value={coverLetterTo}
            onChange={(e) => setCoverLetterTo(e.target.value)}
            required
          />
        </div>

        {/* CV and Job Offer Textareas */}
        <textarea
          className="w-full p-3 mt-4 bg-[#EEEEEE] text-black border border-gray-500 rounded-lg shadow-sm"
          rows="4"
          placeholder="Paste your CV here"
          value={cv}
          onChange={(e) => setCv(e.target.value)}
          required
        ></textarea>

        <textarea
          className="w-full p-3 mt-4 bg-[#EEEEEE] text-black border border-gray-500 rounded-lg shadow-sm"
          rows="4"
          placeholder="Paste the job offer here"
          value={jobOffer}
          onChange={(e) => setJobOffer(e.target.value)}
          required
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="w-100 mt-6 bg-[#BF3131] text-white p-3 rounded-lg hover:bg-[#7D0A0A] shadow-md">
            GENERATE COVER LETTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
