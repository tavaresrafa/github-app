'use stric'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Type the Github username'
      onKeyUp={handleSearch} />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
