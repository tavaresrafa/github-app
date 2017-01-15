'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars.githubusercontent.com/u/9735792?v=3' />
    <h1 className='username'>
      <a href='https://github.com/tavaresrafa'>Rafael Tavares</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositories: 7</li>
      <li>Followers: 14</li>
      <li>Following: 24</li>
    </ul>
  </div>
)

export default UserInfo
