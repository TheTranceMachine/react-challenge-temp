import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fetchedData, setFetchedData] = useState({
    body: '',
    message: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/test');
      if (response.ok) {
        const data = await response.json();
        setFetchedData(data);
      } else {
        const data = response.json();
        setFetchedData(data);
      }
    }

    const apiCall = fetchData();
  }, []);

  return fetchedData !== null && fetchedData.message === 'Success' ? (
    <div>{fetchedData.body}</div>
  ) : (
    <div>Error fetching the data. Try again.</div>
  )
}

export default App;
