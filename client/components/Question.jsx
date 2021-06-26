import React from 'react'
import { Form } from 'semantic-ui-react'

class Question extends React.Component {
  // vvv Placeholder for backend vvv
  state = {
    answer: '',
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    correctAnswers: [32],
    isCorrect: undefined
  }
  // ^^^ Placeholder for backend (numbers and correctAnswers) ^^^

  handleChange = (e) => {
    this.setState({ [e.target.name]: [e.target.value] })
  }

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      this.checkAnswer()
    }
  }

  checkAnswer = () => {
    if (this.state.answer[0] === '32') {
      this.setState({ isCorrect: true })
    } else {
      this.setState({ isCorrect: false })
    }
    this.setState({ answer: '' })
  }

  render () {
    return (
      <div className='question-container' onKeyDown={this.handleEnter}>
        <p>What is {this.state.numbers[8]} x {this.state.numbers[4]}?</p>
        <Form.Input onChange={this.handleChange} value={this.state.answer} placeholder='Go Shnooks! <3' name='answer' style={{ position: 'relative', top: '1vh', left: '1vw', height: '3vh', width: '5vw' }}></Form.Input>
        {this.state.isCorrect &&
          <p className='answer-indicator'>Correct!</p>
        }
        {this.state.isCorrect === false &&
          <p className='answer-indicator'>Incorrect!</p>
        }
      </div>
    )
  }
}

export default Question
