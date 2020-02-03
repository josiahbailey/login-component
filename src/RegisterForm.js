import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Register = () => {
    const [traveler, setTraveler] = useState({
        name: '',
        email: '',
        password: ''
    }) 
    
    const handleChange = e => {
        setTraveler({ ...traveler, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div>Register
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={traveler.name} name='name' type='text' placeholder='First Name' /><br/>
                <input onChange={handleChange} value={traveler.email} name='email' type='text' placeholder='Email' /><br/>
                <input onChange={handleChange} value={traveler.password} name='password' type='text' placeholder='Password' /><br/>
                <input type='text' placeholder='Confirm Password' /><br/>
                <button>New Traveler?</button><br/>
                <button>New KidsConnect?</button>
            </form>
        </div>

    );
    traveler.propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string
    }
}

export default Register;