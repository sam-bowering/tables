import React from 'react'
import Welcome from './Welcome'
import Menu from './Menu'

class Body extends React.Component {
  state = {
    welcomeIsVisible: true,
    mouseOverWelcome: false,
    menuIsVisible: false
  }

  handleWelcomeFade = () => {
    this.setState({ mouseOverWelcome: true, welcomeIsVisible: false })
  }

  render () {
    return (
      <div className='container'>
        {this.state.welcomeIsVisible &&
          <div onMouseEnter={this.handleWelcomeFade} style={{ width: '30vw', height: '60vh' }}>
            <Welcome />
          </div>
        }
        {this.state.menuIsVisible &&
          <div>
            <Menu />
          </div>
        }
      </div>
    )
  }
}

export default Body
