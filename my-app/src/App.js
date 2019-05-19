import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import getUserDetails from "./service";
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  const [name, updateName] = useState("Amandeep Singh");
  const [time, updateTime] = useState(new Date().toString());
  

  useEffect(() => {
    setInterval(function() {
      updateTime(new Date().toString());
      //updateName("Abhimanyu"); //TODO: create new function to return new Name from API
      // time = new Date().toString();
      // name = "Some Other name";
    }, 1000);
  });

  const userDetails = getUserDetails();
  return (
    <div className="App">
      <h1>
        Hello{" "}
        <a
          href={"https://twitter.com/" + userDetails.twitterHandle}
          target="_blank"
        >
          {name}
          jbhjb
        </a>
        !
      </h1>
      <h2>Currently time is {time}</h2>
      <p>Observe the power of React's VDOM by in Dev-tools</p>
    </div>
  );
}

export default App;
