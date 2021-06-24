import React from 'react'

class Body extends React.Component {
  state = {
    welcomeIsVisible: true,
    mouseOverContainer: false
  }

  handleTextSwap = () => {
    this.setState({ mouseOverContainer: true })
    if (this.state.mouseOverContainer) {
      this.setState({ welcomeIsVisible: false })
    }
  }

  render () {
    return (
      <div className='container'>
        {this.state.welcomeIsVisible &&
          <div className='welcome-container' onMouseOver={this.handleTextSwap}>
            <span>Hello <br/>Cute!</span>
          </div>
        }
      </div>
    )
  }
}

export default Body
