import React, { useState } from 'react';
import './App.css';

function App() {
 const [joke, setJoke] = useState('');

 const getJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setJoke(data.joke);
 };

 return (
    <div className="App">
      <h1>Random Joke Generator</h1>
      <button onClick={getJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
 );
}

export default App;