import React from 'react'
import { directors } from '../data'

function Directors() {
  const directorNames = directors.map((director) => (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <p>Movies:</p>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {directorNames}
    </div>
  )
}

export default Directors
