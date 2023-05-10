import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/Messages")
    .then(res => res.json())
    .then(data => setMessages(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      {
        messages.map((sayings => (
       <p>"{sayings.content}" ~ {sayings.author}</p>  
      //  sayings is each individual object in our messages data list
        )))
      }
      </header>
    </div>
  );
}

export default App;
