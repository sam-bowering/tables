import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  state = {
    tables: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  render () {
    return (
      <div className='container'>
        <div className='menu-container'>
          <span>Choose Table</span>
          <div className='button-container'>
            {this.state.tables.map(i =>
              <Link key={i} to={`/tables/:${i}`}><button type='button'>{i}</button></Link>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
