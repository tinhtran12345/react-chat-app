import React from 'react'
import av2 from '../images/ava2.png'
import av1 from '../images/ava1.png'


export const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src={av1} alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello world</p>
                <img src={av2} alt="" />
            </div>

        </div>
    )
}
