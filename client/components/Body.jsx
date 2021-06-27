import React from 'react'
import Welcome from './Welcome'
import Menu from './Menu'
import Choice from './Choice'

class Body extends React.Component {
  state = {
    welcomeIsVisible: true,
    mouseOverWelcome: false,
    menuIsVisible: false
  }

  handleWelcomeFade = () => {
    this.setState({
      mouseOverWelcome: true,
      welcomeIsVisible: false,
      menuIsVisible: true
    })
  }

  handleMenuFade = () => {
    this.setState({ menuIsVisible: false, welcomeIsVisible: true })
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
          <div onMouseLeave={this.handleMenuFade} style={{ width: '30vw', height: '60vh' }}>
            {/* <Menu /> */}
            <Choice />
          </div>
        }
      </div>
    )
  }
}

export default Body
