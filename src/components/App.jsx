import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";


function App() {
  return(
    <Router>
      <Home />
    </Router>
  );
}

export default App;
