import { useEffect, useState } from 'react';
import api from './services/api'; // Import our Axios config
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request to http://127.0.0.1:8000/api/items/
    api.get('items/')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data from Django:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data from backend...</p>;

  return (
    <div className="App">
      <h1>Django + React Connected!</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
