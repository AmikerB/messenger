import React from 'react';

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
                    <input type='file' />
                    <button>Sign Up</button>
                </form>
                <p>You already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register