import React from 'react'
import Home from './Home'

class Percentages extends React.Component {
  render () {
    return (
      <div className='container'>
        <Home />
        <div className='percentages-container'>
          <div className='question-container'>
            <p>What is 50% of 24?</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Percentages
