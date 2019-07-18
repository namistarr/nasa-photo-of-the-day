import React from "react";
import "./App.css";
import Logo from './components/Logo.js';

import NasaPics from './components/NasaPics.js';

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Logo />
      <h1>Your Picture of the Day</h1>
      <NasaPics limit={1} />

    </div>
  );
}

export default App;
