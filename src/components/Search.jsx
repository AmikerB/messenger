import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type='text' placeholder='search' />
            </div>
            <div className='userChat'>
                <img src='https://media.licdn.com/dms/image/C4D03AQEngGDsmDg48Q/profile-displayphoto-shrink_200_200/0/1610457684761?e=1686787200&v=beta&t=XyUxP1T6329u--KEbY1MTh3exFw42nFjzuTEfup3s_0' alt='' />
                <div className="userChatInfo">
                    <span>User 1</span>
                </div>
            </div>
        </div>
    )
}

export default Search