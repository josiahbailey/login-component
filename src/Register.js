import React from 'react';
import { Link } from 'react-router-dom'

const Register = () => {
    return (  
        <div>
            <Link to='/register/traveler'>Traveler</Link><br/>
            Or<br/>
            <Link to='/register/kidsconnect'>Kids Connect</Link>
        </div>
    );
}
 
export default Register;