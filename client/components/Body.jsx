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
          <div onMouseEnter={this.handleWelcomeFade} style={{ width: '30vw', height: '60vh' }}>
            <Welcome />
          </div>
        }
        {this.state.choiceIsVisible &&
          <div onMouseLeave={this.handleChoiceFade} style={{ width: '30vw', height: '60vh' }}>
            <Choice />
          </div>
        }
      </div>
    )
  }
}

export default Body
