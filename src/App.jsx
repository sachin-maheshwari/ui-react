import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  const [inputs, setInputs] = useState(new Array(10).fill(''));
  const [currentPage, setCurrentPage] = useState(0);
  const [jsonData, setJsonData] = useState(null);

  const handleChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const handleSubmit = async () => {
    // ...
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Paging, Input Submission, and JSON Result</h1>
      {inputs.slice(currentPage * 10, currentPage * 10 + 10).map((value, index) => (
        <input
          key={index}
          className="form-control mb-2"
          type="text"
          value={value}
          onChange={(e) => handleChange(currentPage * 10 + index, e.target.value)}
        />
      ))}
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      <div className="mt-3">
        <button
          className="btn btn-secondary mr-2"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.floor(inputs.length / 10)}
        >
          Next
        </button>
      </div>
      {jsonData && (
        <div className="mt-5">
          <h2>JSON Result:</h2>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
