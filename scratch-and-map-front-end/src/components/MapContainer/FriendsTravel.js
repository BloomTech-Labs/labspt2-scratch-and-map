import React from 'react'
import ReactDOM from 'react-dom'

class FriendsTravel extends React.Component {
  render () {
    return <div className='message-box'>
      Hello {this.props.status}
    </div>
  }
}

export default FriendsTravel