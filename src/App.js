import React from 'react';
import './App.css';
import Login from './Login'
import Register from './RegisterForm'
import { Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Link to="/login" >Login</Link><br/>
        <Link to='/register' >Register</Link>
      </Route>
      <Route path='/login' >
        <Login/>
      </Route>
      <Route path='/register' >
        <Register/>
      </Route>
    </div>
  );
}

export default App;
