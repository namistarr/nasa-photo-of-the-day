import React from "react";
import "./App.css";
import Logo from './components/Logo.js';
import NasaPics from './components/NasaPics.js';
import styled from 'styled-components';

const AppStyle = styled.div`
background-color: black;
color: white;
text-align: center;
padding: 60px;
`


function App() {
  return (
    <AppStyle>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Logo />
      <h2>Your Picture of the Day 🚀</h2>
      <NasaPics limit={1} />

    </AppStyle>
  );
}

export default App;
