import React from "react";
import "./App.css";
import Logo from './components/Logo.js';
import NasaPics from './components/NasaPics.js';
import styled from 'styled-components';

const AppStyle = styled.div`
height: 100vh;
background-color: black;
color: white;
`


function App() {
  return (
    <AppStyle>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Logo />
      <h1>Your Picture of the Day 🚀</h1>
      <NasaPics limit={1} />

    </AppStyle>
  );
}

export default App;
