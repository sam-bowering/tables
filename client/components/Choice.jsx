import React from 'react'
import { Link } from 'react-router-dom'

class Choice extends React.Component {
  render () {
    return (
      <div className='choice-container'>
        <Link to='/percentages'><h1>%</h1></Link>
        <Link to='/menu'><h1>X</h1></Link>
      </div>
    )
  }
}

export default Choice
