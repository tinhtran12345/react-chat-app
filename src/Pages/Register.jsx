import React from "react";
import add_avatar from "../images/add_avatar.webp";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../Firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            // Init user with Email and Password
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            // console.log(res);

            const storageRef = ref(storage, `${displayName}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        // Update profile
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        // Add data to cloud firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });
                        // Create empty user chat on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        setErr(true);
                        console.log(err);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            console.log(err);
        }
    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat app</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter the name" />
                    <input type="email" placeholder="Enter the email" />
                    <input type="password" placeholder="Enter the password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={add_avatar} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err === true && <p>Something went wrong</p>}
                </form>
                <p>
                    You do have an account ?{" "}
                    <span>
                        <Link to="/login">Login</Link>
                    </span>{" "}
                </p>
            </div>
        </div>
    );
};
