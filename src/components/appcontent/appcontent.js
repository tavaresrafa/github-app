'use strict'

import React, { PropTypes } from 'react'
import Search from '../search/search'
import UserInfo from '../userinfo/userinfo'
import Actions from '../actions/actions'
import Repositories from '../repositories/repositories'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Loading...</div>}
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
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
