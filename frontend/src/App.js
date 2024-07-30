import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlightForm from './Components/FlightForm';
import FlightDetails from './Components/FlightDetails';
import './styles.css';

function App() {
  const [showFlightForm, setShowFlightForm] = useState(false);

  const toggleFlightForm = () => {
    setShowFlightForm(!showFlightForm);
  }

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Indigo Airlines</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/careers">Careers</a></li>
              
            </ul>
          </nav>
        </header>
        
        <Switch>
          <Route exact path="/" component={FlightForm} />
          <Route path="/details" component={FlightDetails} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
