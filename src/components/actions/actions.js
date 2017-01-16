'use strict'

import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Repositories</button>
    <button onClick={getStarred}>Favorites</button>
  </div>
)

export default Actions
