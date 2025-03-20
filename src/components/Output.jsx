const Output = ({ letter }) => {
  if (!letter) return null; // Don't show anything if there's no letter yet

  return (
    <div className="min-h-screen flex justify-center bg-[#f5e0b8] p-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-6xl xl:max-w-7xl p-6 mt-6">
        <h2 className="text-xl font-bold mb-2 text-[#BF3131]">
          Generated Cover Letter
        </h2>
        <textarea
          value={letter}
          className="w-full p-4 border border-gray-300 rounded-lg bg-white text-black h-150 resize-none shadow-xl"
        />
        {/* <p className="whitespace-pre-line">{letter}</p>{" "} */}
      </div>
    </div>
  );
};

export default Output;
