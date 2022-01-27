
import React from 'react';
import Selection from './components/Selection/index';
import DeskMap from './components/DeskMap/index';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =() => {
  return (
    <Router>
    <div className="App">
      </div>
      <Routes>
        <Route exact path="/" element={<Selection/>}/>
        <Route exact path="/create" element={<DeskMap />}/>
      </Routes>
      </Router>
  );
}

export default App;
