import React from 'react'
import Home from './Home'
import Score from './Score'
import { Form } from 'semantic-ui-react'

class TablesAll extends React.Component {
  componentDidMount () {
    const firstNum = this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)]
    const secondNum = this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)]
    this.setState({
      question: {
        firstNum,
        secondNum,
        answer: firstNum * secondNum
      }
    })
  }

  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    question: {
      firstNum: undefined,
      secondNum: undefined,
      answer: undefined
    },
    entry: '',
    isCorrect: undefined,
    score: 0
  }

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
    const { answer } = this.state.question
    const { score } = this.state
    const entry = parseInt(this.state.entry[0])
    if (entry === answer) {
      this.setState({ isCorrect: true, entry: '', score: score + 10 })
      setTimeout(this.generateQuestion, 500)
    } else {
      this.setState({ isCorrect: false, entry: '', score: score - 5 })
      setTimeout(this.generateQuestion, 1500)
    }
  }

  generateQuestion = () => {
    this.setState({
      question: {
        firstNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)],
        secondNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)]
      },
      isCorrect: undefined
    })
    this.setState({
      question: {
        firstNum: this.state.question.firstNum,
        secondNum: this.state.question.secondNum,
        answer: this.state.question.firstNum * this.state.question.secondNum }
    })
  }

  render () {
    return (
      <div className='container'>
        <Home />
        <Score score={this.state.score}/>
        <div className='tables-container'>
          <div className='question-container' onKeyDown={this.handleEnter}>
            <p>What is {this.state.question.firstNum} x {this.state.question.secondNum}?</p>
            <Form.Input onChange={this.handleChange} value={this.state.entry} placeholder='Go Shnooks! <3' name='entry' style={{ position: 'relative', top: '1vh', left: '1vw', height: '3vh', width: '5vw' }}></Form.Input>
            {this.state.isCorrect &&
              <p className='answer-indicator'>Correct!</p>
            }
            {this.state.isCorrect === false &&
              <>
                <p className='answer-indicator'>Incorrect!</p>
                <p className='answer-indicator'>The answer is: {this.state.question.answer}</p>
              </>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default TablesAll
