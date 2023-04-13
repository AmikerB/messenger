import React from 'react';
import Add from '../images/addAvatar.png'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Simple Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='username' />
                    <input type='email' placeholder='email' />
                    <input type='password' placeholder='password' />
                    <input type='file' id='file' style={{ display: 'none' }} />
                    <label htmlFor='file'>
                        <img src={Add} alt='' style={{ width: '50px', height: '50px' }} />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>You already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register