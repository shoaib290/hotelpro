import './App.css';
import React from 'react'
import Routes from './Routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';


function App() {
  return (
    <div className="App">
      <Router>        
        <Switch>
          <Route path="/" exact component={Login} />
          <Routes />
        </Switch>
      </Router>

    </div>
  );  
}

export default App;
