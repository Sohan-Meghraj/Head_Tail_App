import { useState } from 'react';

function HeadAndTail() {
  const [selection, setSelection] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selection) {
      setError('Please select a value (H or T)');
      return;
    }
    setError('');
    setSubmissions([...submissions, selection]);
    setSelection('');
  };

  // Group submissions into columns
  const columns = {};
  let currentColumn = 0;
  
  submissions.forEach((value, index) => {
    if (index > 0 && value === submissions[index - 1]) {
      if (!columns[currentColumn]) columns[currentColumn] = [];
      columns[currentColumn].push(value);
    } else {
      currentColumn++;
      columns[currentColumn] = [value];
    }
  });

  return (
    <div className="game-container">
      <h1 className="page-title">Head & Tail Game</h1>
      
      <form onSubmit={handleSubmit} className="game-form">
        <select
          value={selection}
          onChange={(e) => setSelection(e.target.value)}
          className="game-select"
        >
          <option value="">Select Value</option>
          <option value="H">H (Head)</option>
          <option value="T">T (Tail)</option>
        </select>
        
        <button type="submit" className="game-button">
          Submit
        </button>
      </form>
      
      {error && <p className="error-message">{error}</p>}
      
      <div className="result-grid">
        {Object.values(columns).map((column, colIndex) => (
          <div key={colIndex} className="result-column">
            {column.map((val, rowIndex) => (
              <div key={`${colIndex}-${rowIndex}`} className="result-cell">
                {val}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeadAndTail;