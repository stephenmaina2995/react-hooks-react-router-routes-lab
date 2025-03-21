import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: 'inline-block',
  width: '50px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
}

function NavBar() {
  return (
    <div className='navbar'>
      <NavLink
        to='/movies'
        exact
        style={linkStyles}
        activeStyle={{ background: 'darkgreen' }}
      >
        Movies
      </NavLink>
      <NavLink
        to='/directors'
        exact
        style={linkStyles}
        activeStyle={{ background: 'darkgreen' }}
      >
        Directors
      </NavLink>
      <NavLink
        to='/actors'
        exact
        style={linkStyles}
        activeStyle={{ background: 'darkgreen' }}
      >
        Actors
      </NavLink>
      <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle={{ background: 'darkgreen' }}
      >
        Home
      </NavLink>
    </div>
  )
}

export default NavBar