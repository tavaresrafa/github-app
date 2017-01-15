'use strict'

import React, { Component } from 'react'
import AppContent from './components/appcontent/appcontent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        photo: 'https://avatars.githubusercontent.com/u/9735792?v=3',
        username: 'Rafael Tavares',
        nickname: 'tavaresrafa',
        repos: 12,
        followers: 10,
        following: 10
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
     />
  }
}

export default App
