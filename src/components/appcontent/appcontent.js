'use strict'

import React, { PropTypes } from 'react'
import Search from '../search/search'
import UserInfo from '../userinfo/userinfo'
import Actions from '../actions/actions'
import Repositories from '../repositories/repositories'

const AppContent = ({ userinfo, repos, starred }) => (
  <div className='app'>
    <Search />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions />}

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
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
