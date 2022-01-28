
import React from 'react';
import Selection from './components/Selection/index';
import DeskMap from './components/DeskMap/index';
import BookDesk from './components/BookDesk/index'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =() => {
  return (
    <Router>
      <div className="App h-screen">
      <Routes>
        <Route exact path="/" element={<Selection/>}/>
        <Route exact path="/create" element={<DeskMap />} />
        <Route exact path="/book" element={<BookDesk />}/>
      </Routes>
      </div>

      </Router>
  );
}

export default App;
