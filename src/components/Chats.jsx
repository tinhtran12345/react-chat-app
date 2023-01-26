import React from 'react'
import av2 from '../images/ava2.png'

export const Chats = () => {
    return (
        <div className='Chats'>
            <div className="userChat">
                <img src={av2} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
            <div className="userChat">
                <img src={av2} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
            <div className="userChat">
                <img src={av2} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}
