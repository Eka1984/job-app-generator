const Output = ({ letter, onReset }) => {
  if (!letter) return null; // Don't show anything if there's no letter yet

  return (
    <div className="flex justify-center bg-[#f5e0b8] p-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-6xl xl:max-w-7xl p-6 mt-6">
        <h2 className="text-xl font-bold mb-2 text-[#BF3131]">
          Generated Cover Letter
        </h2>
        <textarea
          value={letter}
          className="w-full p-4 border border-gray-300 rounded-lg bg-white text-black h-170 text-lg resize-none shadow-xl"
        />
        {/* Go Back Button */}
        <div class="mt-2 mr-5 text-right">
          <button
            class="text-xl text-black hover:text-[#BF3131] underline"
            onClick={onReset}
          >
            Return & Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Output;
