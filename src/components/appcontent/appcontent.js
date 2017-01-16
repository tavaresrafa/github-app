'use strict'

import React, { PropTypes } from 'react'
import Search from '../search/search'
import UserInfo from '../userinfo/userinfo'
import Actions from '../actions/actions'
import Repositories from '../repositories/repositories'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && <Repositories
      className='repositories'
      title='Repositories'
      repos={repos} />
    }

    {!!starred.length && <Repositories
      className='starred'
      title='Starred'
      repos={starred} />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
