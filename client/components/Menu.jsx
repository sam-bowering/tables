import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  render () {
    return (
      <div className='menu-container'>
        <span>Choose Table</span>
        <div className='button-container'>
          <Link to='/tables'><button type='button'>1</button></Link>
          <Link to='/tables'><button type='button'>2</button></Link>
          <Link to='/tables'><button type='button'>3</button></Link>
          <Link to='/tables'><button type='button'>4</button></Link>
          <Link to='/tables'><button type='button'>5</button></Link>
          <Link to='/tables'><button type='button'>6</button></Link>
          <Link to='/tables'><button type='button'>7</button></Link>
          <Link to='/tables'><button type='button'>8</button></Link>
          <Link to='/tables'><button type='button'>9</button></Link>
        </div>
      </div>
    )
  }
}

export default Menu
