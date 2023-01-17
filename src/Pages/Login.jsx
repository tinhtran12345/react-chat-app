import React from 'react'

export const Login = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Chat app</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder='Enter the email' />
                    <input type="password" placeholder='Enter the password' />
                    <input style={{display:"none"}} type="file"  id='file' />
                    <button>Sign in</button>
                </form>
                <p>You do have an account ? <span>Register</span> </p>
            </div>
        </div>
    )
}
