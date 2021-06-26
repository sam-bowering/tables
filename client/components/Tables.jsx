import React from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'

class Tables extends React.Component {
  render () {
    return (
      <div className='container'>
        <Link to='/'><button type='button' className='home-button'>Home</button></Link>
        <div className='tables-container'>
          <Question />
        </div>
      </div>
    )
  }
}

export default Tables
