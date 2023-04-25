import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/NavBar" element={<NavBar />} />
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Directors" element={<Directors />} />
          <Route path="/Actors" element={<Actors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
