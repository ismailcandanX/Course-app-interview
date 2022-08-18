import React from 'react'
import "./Header.css"

function Header() {
    return (
        <header className='app__header'>
            <div className='header__logo'>
                <img src="./logo.png" alt="" />
            </div>
            <div className='header__links'>
                <ul>
                    <li>
                        <span>Login</span>
                    </li>
                    <li>
                        <span>Join Now</span>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header