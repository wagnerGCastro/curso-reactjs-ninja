'use strict'

import React, { PropTypes } from 'react'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>

          <a target="_blank" href={repo.url}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

  // { console.log(repo) }

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
