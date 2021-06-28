import React from 'react'

class Score extends React.Component {
  render () {
    return (
      <div className='score-container'>
        <p>Score:</p>
        <h1>{this.props.score}</h1>
      </div>
    )
  }
}

export default Score
