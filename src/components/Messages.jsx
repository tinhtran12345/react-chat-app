import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../Context/ChatContext";
import { db } from "../Firebase";
import { Message } from "./Message";

export const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);
    console.log(data);

    // get messages from chats of firebases
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unSub();
        };
    }, [data.chatID]);

    console.log(messages);

    return (
        <div className="messages">
            {messages.map((m) => (
                <Message message={m} key={m.id} />
            ))}
        </div>
    );
};
