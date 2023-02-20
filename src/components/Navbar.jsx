import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser);
    return (
        <div className="navbar">
            <span className="logo">App chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button
                    onClick={() => {
                        signOut(auth);
                    }}
                >
                    Log out
                </button>
            </div>
        </div>
    );
};
