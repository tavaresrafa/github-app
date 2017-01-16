'use strict'

import React, { PropTypes } from 'react'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Type the Github username'
      disabled={isDisabled}
      onKeyUp={handleSearch} />
  </div>
)

Search.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search
