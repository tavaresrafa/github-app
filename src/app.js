'use strict'

import React from 'react'
import Search from './components/search/search'
import UserInfo from './components/user-info/user-info'
import Actions from './components/actions/actions'
import Repositories from './components/repositories/repositories'

const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />

    <Repositories
      className='repositories'
      title='Repositories'
      repos={[{
        name: 'Repository name',
        link: '#'
      }]} />

    <Repositories
      className='starred'
      title='Starred'
      repos={[{
        name: 'Repository name',
        link: '#'
      }]} />
  </div>
)

export default App
