import React from 'react';
import PropTypes from 'prop-types'

const Login = () => {
    return (  
        <div>Login
            <form>
                <input type='text' placeholder='Email' /><br/>
                <input type='text' placeholder='Password' /><br/>
                <button>Login</button>
            </form>
        </div>
    );
}
 
export default Login;