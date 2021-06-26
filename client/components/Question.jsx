import React from 'react'
import { Form } from 'semantic-ui-react'

class Question extends React.Component {
  componentDidMount () {
    this.setState({ firstNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)] })
    this.setState({ secondNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)] })
  }
  // vvv Placeholder for backend vvv
  state = {
    entry: '',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    firstNum: '',
    secondNum: '',
    answer: '',
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
      this.checkEntry()
    }
  }

  checkEntry = () => {
    var answer = this.state.firstNum * this.state.secondNum
    if (parseInt(this.state.entry[0]) === answer) {
      this.setState({ isCorrect: true })
    } else {
      this.setState({ isCorrect: false })
    }
    this.setState({ entry: '' })
    this.generateQuestion()
    // this.setState({ isCorrect: undefined })
  }

  generateQuestion = () => {
    this.setState({ firstNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)] })
    this.setState({ secondNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)] })
  }

  render () {
    return (
      <div className='question-container' onKeyDown={this.handleEnter}>
        <p>What is {this.state.firstNum} x {this.state.secondNum}?</p>
        <Form.Input onChange={this.handleChange} value={this.state.entry} placeholder='Go Shnooks! <3' name='entry' style={{ position: 'relative', top: '1vh', left: '1vw', height: '3vh', width: '5vw' }}></Form.Input>
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
