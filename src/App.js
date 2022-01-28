
import React from 'react';
import Selection from './components/Selection/index';
import DeskMap from './components/DeskMap/index';
import BookingAreaSelect from './components/BookingAreaSelect/index'
import BookingForm from './components/BookingForm/index'

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
          <Route exact path="/book-area" element={<BookingAreaSelect />} />
          <Route exact path="/book-form" element={<BookingForm />}/>

      </Routes>
      </div>

      </Router>
  );
}

export default App;
