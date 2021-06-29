import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  state = {
    tables: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  render () {
    return (
      <div className='container'>
        <Home />
        <div className='menu-container'>
          <span>Choose Table</span>
          <div className='button-container'>
            {this.state.tables.map(i =>
              <Link key={i} to={`/tables/:${i}`}><button type='button'>{i}</button></Link>)}
            <Link key={'All'} to={'/tables/all'}><button type='button' style={{ width: '25vw' }}>All</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
