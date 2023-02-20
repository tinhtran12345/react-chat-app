import { useContext } from "react";
import { createContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    // action: type and payload, state: chatID and user
    const INITIAL_STATE = {
        chatID: "null",
        user: {},
    };

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatID:
                        currentUser.uid > action.payload.uid
                            ? currentUser.uid + action.payload.uid
                            : action.payload.uid + currentUser.uid,
                };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};

export { ChatContext, ChatContextProvider };
