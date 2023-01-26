import React from 'react'
import av2 from '../images/ava2.png'

export const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Find a user' />
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
