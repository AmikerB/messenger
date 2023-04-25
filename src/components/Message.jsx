import React from 'react'

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src='https://media.licdn.com/dms/image/D5635AQFaVsUxpyTrpQ/profile-framedphoto-shrink_200_200/0/1680169813161?e=1683036000&v=beta&t=hxe-aaC-7FOUq9CQB48SJG07rHWLV_FyoY11EnmnkBs' />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src='https://media.licdn.com/dms/image/C4D03AQEngGDsmDg48Q/profile-displayphoto-shrink_100_100/0/1610457684761?e=1687996800&v=beta&t=6OrsZcPeCWh7zWNShMSJqflA2L3dnE4OU2V4Dh5tz9s' />
            </div>
        </div>
    )
}

export default Message