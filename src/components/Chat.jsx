import React, { useContext } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { Message } from '@mui/icons-material';
import { Messages } from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "../Context/ChatContext";

export const Chat = () => {
    const { data } = useContext(ChatContext);
    // console.log("Data ", data);
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName} </span>
                <div className="chatIcons">
                    <CameraAltIcon />
                    <AddIcon />
                    <MoreHorizIcon />
                </div>
            </div>

            <Messages />
            <Input />
        </div>
    );
};
