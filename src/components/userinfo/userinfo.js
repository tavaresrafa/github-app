'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo} />
    <h1 className='username'>
      <a href={`https://github.com/${userinfo.nickname}`}>
        {userinfo.username}
      S</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositories: {userinfo.repos}</li>
      <li>Followers: {userinfo.followers}</li>
      <li>Following: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.PropTypes = {
  userinfo: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
