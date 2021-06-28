import React from 'react'
import Home from './Home'
import Score from './Score'
import { withRouter } from 'react-router'
import { Form } from 'semantic-ui-react'

class Tables extends React.Component {
  componentDidMount () {
    this.setState({
      firstNum: parseInt(this.props.match.params.selectedTable.substring(1)),
      secondNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)]
    })
  }

  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    firstNum: '',
    secondNum: '',
    entry: '',
    answer: '',
    isCorrect: undefined,
    score: 0,
    completed: []
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
    var answer = this.state.firstNum * this.state.secondNum
    if (parseInt(this.state.entry[0]) === answer) {
      this.setState({ isCorrect: true, entry: '', score: this.state.score + 10 })
      setTimeout(this.generateQuestion, 500)
    } else {
      this.setState({ isCorrect: false, entry: '', score: this.state.score - 5 })
      setTimeout(this.generateQuestion, 1500)
    }
  }

  generateQuestion = () => {
    this.updateNumbers()
    this.setState({ secondNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)] })
    this.setState({ isCorrect: undefined })
    var answer = this.state.firstNum * this.state.secondNum
    this.setState({ answer: answer })
  }

  updateNumbers = () => {
    if (this.state.numbers.length > 1) {
      this.setState({ numbers: [...this.state.numbers.filter(num => num !== this.state.secondNum)] })
    } else {
      this.setState({ numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] })
      this.generateQuestion()
    }
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
