'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input
        type='search'
        placeholder='Type the Github username' />
    </div>

    <div className='user-info'>
      <img src='https://avatars.githubusercontent.com/u/9735792?v=3' />
      <h1>
        <a href='https://github.com/tavaresrafa'>Rafael Tavares</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositories: 7</li>
        <li>Followers: 14</li>
        <li>Following: 24</li>
      </ul>

      <div className='actions'>
        <button>Repositories</button>
        <button>Favorites</button>
      </div>

      <div className='repos'>
        <h2>Repositories:</h2>
        <ul>
          <li><a href='#'>Repository name</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favorites</h2>
        <ul>
          <li><a href='#'>Repository name</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
