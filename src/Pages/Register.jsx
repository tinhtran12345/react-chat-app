import React from 'react'
import add_avatar from "../images/add_avatar.webp"

export const Register = () => {
    // const 
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Chat app</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder='Enter the name' />
                    <input type="email" placeholder='Enter the email' />
                    <input type="password" placeholder='Enter the password' />
                    <input style={{display:"none"}} type="file"  id='file' />
                    <label htmlFor="file">
                        <img src={add_avatar} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account ? <span>Login</span> </p>
            </div>
        </div>
    )
}
