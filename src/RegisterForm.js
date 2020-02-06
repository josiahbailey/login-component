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
    const [pass, setPass] = useState('')
    const [passLink, setPassLink] = useState(link)

    user.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
    }
    
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handlePass = e => {
        setPass(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    const lastName = () => {
        if (link === '/register/kidsconnect2') {
           return(
               <div>
               <input className='text-input' onChange={handleChange} value={user.name} name='name' type='text' placeholder='Last Name' /><br/>
               </div>
           )
        }
    }
    
    const [warning, setWarning] = useState('')

    const testPass = () => {
        if (pass === user.password) {
            setPassLink(link)
            setWarning('')
        } else {
            if (link === '/register/kidsconnect2') {
                setPassLink('/register/kidsconnect')
            } else {
                setPassLink('/register/traveler')
            }
            setWarning('Passwords Do Not Match')
        }
        return passLink
    }

    return (
        <div>
            <h1 className='input-h1'>Register</h1>
            <h1 className='input-warning'>{warning}</h1>
            <form onSubmit={handleSubmit}>
                <input className='text-input' onChange={handleChange} value={user.name} name='name' type='text' placeholder='First Name' /><br/>
                {lastName()}
                <input className='text-input' onChange={handleChange} value={user.email} name='email' type='password' placeholder='Email' /><br/>
                <input className='text-input' onChange={handleChange} value={user.password} name='password' type='password' placeholder='Password' /><br/>
                <input className='text-input' onChange={handlePass} type='password' placeholder='Confirm Password' /><br/>
                <Link to='/register'><button className='input-button'>Go Back</button></Link>
                <button onClick={e => testPass()} className='input-button'>Continue</button>
            </form>
        </div>

    );
}

export default Register;