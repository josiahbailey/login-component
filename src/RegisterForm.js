import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Register = ({ link }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }) 

    user.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
    }
    
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    const lastName = () => {
        if (link === '/kidsconnect2') {
           return(
               <div>
               <input onChange={handleChange} value={user.name} name='name' type='text' placeholder='Last Name' /><br/>
               </div>
           )
        }
    }

    return (
        <div>Register
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={user.name} name='name' type='text' placeholder='First Name' /><br/>
                {lastName()}
                <input onChange={handleChange} value={user.email} name='email' type='text' placeholder='Email' /><br/>
                <input onChange={handleChange} value={user.password} name='password' type='text' placeholder='Password' /><br/>
                <input type='text' placeholder='Confirm Password' /><br/>
                <Link to='/register'><button>Go Back</button></Link>
                <Link to={link}><button>Continue</button></Link>
            </form>
        </div>

    );
}

export default Register;