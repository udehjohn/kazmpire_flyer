import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/flyer" Component={Register}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

