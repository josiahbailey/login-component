import React from 'react';
import './App.css';
import Login from './Login'
import RegisterForm from './RegisterForm'
import Register from './Register'
import { Link, Route } from 'react-router-dom'
import Logo from './img/kidsfly_logo.png'

function App() {
  return (
    <div className="App">
    <div className='logo-div'><img className='logo' src={Logo} /></div>
      <Route exact path='/'>
        <Link className='app-link' to="/login" ><h1 className='app-h1'>Login</h1></Link><br/>
        <Link className='app-link' to='/register' ><h1 >Register</h1></Link>
      </Route>
      <Route path='/login' >
        <Login/>
      </Route>
      <Route exact path='/register' >
        <Register/>
      </Route>
      <Route path='/register/kidsconnect' >
        <RegisterForm link='/register/kidsconnect2'/>
      </Route>
      <Route path='/register/traveler' >
        <RegisterForm link='/trips' />
      </Route>
    </div>
  );
}

export default App;
