'use strict'

import React from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no GitHub'
      onKeyUp={handleSearch}

      // onKeyUp={(e) => {
      //   const keycode = e.which || e.keyCode
      //   console.log('code tecla ->> ', keycode);
      // }}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
