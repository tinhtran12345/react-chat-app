import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
export const Input = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Type something ...'/>
            <div className="send">
                <AttachFileIcon/>
                <input type="file" style={{display:"none"}} id='file'/>
                <label htmlFor="file">
                    <AddPhotoAlternateIcon/>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}
