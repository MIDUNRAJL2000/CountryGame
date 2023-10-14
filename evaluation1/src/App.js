import React from "react";
import "./App.css";
import CountryCapital from "./CountryCapital";

function App() {
  const data = {
    India: "New Delhi",
    Pakisthan: "Islamabad",
    Netherlands: "Amsterdam",
    Afganisthan: "Kabul",
    Egypt: "Cairo",
  };

  return (
    <div className="App">
      <CountryCapital data={data} />
    </div>
  );
}

export default App;
