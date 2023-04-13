import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Simple Chat</span>
            <div className="user">
                <img src='https://avatars.githubusercontent.com/u/118816092?v=4' alt='' />
                <span>Amiker</span>
                <button>log out</button>
            </div>
        </div>
    )
}

export default Navbar