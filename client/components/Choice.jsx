import React from 'react'
import { Link } from 'react-router-dom'

class Choice extends React.Component {

  render () {
    return (
      <div className='choice-container'>
        <Link to='/fractions'><h1>1/2</h1></Link>
        <Link to='/menu'><h1>X</h1></Link>
      </div>
    )
  }
}

export default Choice
