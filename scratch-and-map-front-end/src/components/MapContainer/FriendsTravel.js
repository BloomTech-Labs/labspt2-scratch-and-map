import React from 'react'
import ReactDOM from 'react-dom'

class FriendsTravel extends React.Component {
  render () {
      console.log(this.props.friends[0])
    return <div className='message-box'>
      Hello
    </div>
  }
}

export default FriendsTravel