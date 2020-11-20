'use strict'

import React from 'react'

const Actions = (  ) => (
  <div className='actions'>
    <button>Ver repositórios</button>
    <button>Ver favoritos</button>


  </div>
)

// const Actions = ( getRepositories, getFavorites ) => (
//   <div className='actions'>
//     <button onClick={getRepositories}>Ver repositórios</button>
//     <button onClick={getFavorites}>Ver favoritos</button>
//
//     <button onClick={() => console.log('cliquei')}>Ver favoritos 2</button>
//   </div>
// )


Actions.propTypes = {
  // getRepositories: React.PropTypes.func.isRequired,
  // getFavorites: React.PropTypes.func.isRequired
}

export default Actions
