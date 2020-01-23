import React from 'react';
import './App.css';
// import LoginComponent from './containers/LogInComponent/LoginComponent';
import RoutingComponent from './routers/RoutingComponent';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutingComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
