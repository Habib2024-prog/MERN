


import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>MERN Stack App (Vite)</h1>
      <p>Backend says: {message}</p>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>

      </table >
    </div>
  );
}

export default App;
