const Output = ({ letter }) => {
  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 bg-gray-100 border rounded">
      <h2 className="text-lg font-bold text-red-600">Generated Cover Letter</h2>
      <pre className="whitespace-pre-wrap p-2">{letter}</pre>
    </div>
  );
};

export default Output;
