import React from 'react'
import { Form } from 'semantic-ui-react'

class Question extends React.Component {
  // vvv Placeholder for backend vvv
  state = {
    answer: '',
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  // ^^^ Placeholder for backend ^^^

  

  render () {
    return (
      <div className='question-container'>
        <p>What is {this.state.numbers[8]} x {this.state.numbers[4]}?</p>
        <Form.Input placeholder='Go Shnooks! <3' name='answer' value={this.state.answer} style={{ position: 'relative', top: '1vh', left: '1vw', height: '3vh', width: '5vw' }}></Form.Input>
      </div>
    )
  }
}

export default Question
