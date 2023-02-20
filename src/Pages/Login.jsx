import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

export const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setErr(true);
        }
    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat app</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Enter the email" />
                    <input type="password" placeholder="Enter the password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <button>Sign in</button>
                </form>
                {err === true && <p>Something went wrong</p>}
                <p>
                    You do have an account ?{" "}
                    <span>
                        <Link to="/register">Register</Link>
                    </span>{" "}
                </p>
            </div>
        </div>
    );
};
