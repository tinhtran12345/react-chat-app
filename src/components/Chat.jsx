import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { Message } from '@mui/icons-material';
import {Messages} from "./Messages"
import { Input } from './Input';

export const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>TinhTran </span>
                <div className="chatIcons">
                    <CameraAltIcon />
                    <AddIcon/>
                    <MoreHorizIcon/>        
                </div>
            </div>

            <Messages/>
            <Input/>
        </div>
    )
}
