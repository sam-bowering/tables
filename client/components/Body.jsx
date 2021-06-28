import React from 'react'
import Welcome from './Welcome'
import Choice from './Choice'

class Body extends React.Component {
  state = {
    welcomeIsVisible: true,
    mouseOverWelcome: false,
    choiceIsVisible: false
  }

  handleWelcomeFade = () => {
    this.setState({
      mouseOverWelcome: true,
      welcomeIsVisible: false,
      choiceIsVisible: true
    })
  }

  handleChoiceFade = () => {
    this.setState({ choiceIsVisible: false, welcomeIsVisible: true })
  }

  render () {
    return (
      <div className='container'>
        {this.state.welcomeIsVisible &&
          <div className='welcome-container' onMouseEnter={this.handleWelcomeFade}>
            <Welcome />
          </div>
        }
        {this.state.choiceIsVisible &&
          <div className='choice-container' onMouseLeave={this.handleChoiceFade} style={{ width: 'fit-content', height: 'fit-content' }}>
            <Choice />
          </div>
        }
      </div>
    )
  }
}

export default Body
