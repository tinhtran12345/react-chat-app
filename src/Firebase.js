import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCBcLxjVGvcVK0PzLTYgDY6Gsu7IwUiZBg",
    authDomain: "chat-app-901d4.firebaseapp.com",
    projectId: "chat-app-901d4",
    storageBucket: "chat-app-901d4.appspot.com",
    messagingSenderId: "1061441745396",
    appId: "1:1061441745396:web:ecd7ba644f9c50b91549a1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
