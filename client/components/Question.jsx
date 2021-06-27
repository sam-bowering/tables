import React from 'react'
import { Form } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class Question extends React.Component {
  componentDidMount () {
    this.setState({
      firstNum: parseInt(this.props.match.params.selectedTable.substring(1)),
      secondNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)]
    })
  }

  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    firstNum: '',
    secondNum: '',
    entry: '',
    answer: '',
    isCorrect: undefined
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
    this.setState({ answer: answer })
    if (parseInt(this.state.entry[0]) === answer) {
      this.setState({ isCorrect: true, entry: '' })
      setTimeout(this.resetQuestion, 500)
    } else {
      this.setState({ isCorrect: false, entry: '' })
      setTimeout(this.resetQuestion, 1500)
    }
  }

  resetQuestion = () => {
    this.setState({ secondNum: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)] })
    this.setState({ isCorrect: undefined })
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
          <>
            <p className='answer-indicator'>Incorrect!</p>
            <p className='answer-indicator'>The answer is: {this.state.answer}</p>
          </>
        }
      </div>
    )
  }
}

export default withRouter(Question)
