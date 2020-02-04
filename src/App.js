import React from 'react';
import './App.css';
import Login from './Login'
import RegisterForm from './RegisterForm'
import Register from './Register'
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
      <Route exact path='/register' >
        <Register/>
      </Route>
      <Route path='/register/kidsconnect' >
        <RegisterForm link='/kidsconnect2'/>
      </Route>
      <Route path='/register/traveler' >
        <RegisterForm link='/trips' />
      </Route>
    </div>
  );
}

export default App;
