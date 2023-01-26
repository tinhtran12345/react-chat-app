import React from 'react'
import ava1 from  "../images/ava1.png"

export const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">App chat</span>
            <div className="user">
                <img src={ava1} alt="" />
                <span>Tinhtran</span>
                <button>Log out</button>
            </div>
        </div>
    )
}
