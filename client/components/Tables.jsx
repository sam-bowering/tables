import React from 'react'
import Home from './Home'
import Score from './Score'
import { withRouter } from 'react-router'
import { Form } from 'semantic-ui-react'

class Tables extends React.Component {
  componentDidMount () {
    var firstNum = parseInt(this.props.match.params.selectedTable.substring(1))
    var secondNum = this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)]
    this.setState({
      firstNum,
      secondNum,
      answer: firstNum * secondNum
    })
  }

  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    firstNum: undefined,
    secondNum: undefined,
    entry: '',
    answer: undefined,
    isCorrect: undefined,
    score: 0
  }

  // 1. User Enters Answer
  handleChange = (e) => {
    this.setState({ [e.target.name]: [e.target.value] })
  }

  // 2. User Submits Answer - Calls checkEntry
  handleEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      this.checkEntry()
    }
  }

  // 3. Handles All Answering Functionality - Calls generateQuestion
  checkEntry = () => {
    var answer = this.state.firstNum * this.state.secondNum
    if (parseInt(this.state.entry[0]) === answer) {
      this.setState({ isCorrect: true, entry: '', score: this.state.score + 10 })
      this.updateNumbers()
      setTimeout(this.generateQuestion, 500)
    } else {
      this.setState({ isCorrect: false, entry: '', score: this.state.score - 5 })
      this.updateNumbers()
      setTimeout(this.generateQuestion, 1500)
    }
  }

  // 3.5. Updates Number Array - Calls generateQuestion Also
  updateNumbers = () => {
    if (this.state.numbers.length > 1) {
      this.setState({ numbers: [...this.state.numbers.filter(num => num !== this.state.secondNum)] })
    } else {
      this.setState({ numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] })
      this.generateQuestion()
    }
  }

  // 4. Creates New Question
  generateQuestion = () => {
    this.setState({ secondNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)] })
    this.setState({ isCorrect: undefined })
    var answer = this.state.firstNum * this.state.secondNum
    this.setState({ answer: answer })
  }

  render () {
    return (
      <div className='container'>
        <Home />
        <Score score={this.state.score}/>
        <div className='tables-container'>
          <div className='question-container' onKeyDown={this.handleEnter}>
            <p>What is {this.state.firstNum} x {this.state.secondNum}?</p>
            <Form.Input onChange={this.handleChange} value={this.state.entry} placeholder='Go Shnooks! <3' name='entry' style={{ position: 'relative', top: '1vh', left: '1vw', height: '3vh', width: '5vw' }}></Form.Input>
            {this.state.isCorrect &&
              <p className='answer-indicator'>Correct!</p>
            }
            {this.state.isCorrect === false &&
              <>
                <p className='answer-indicator'>Incorrect!</p>
                <p className='answer-indicator'>The answer is: {this.state.answer}</p>
              </>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Tables)
