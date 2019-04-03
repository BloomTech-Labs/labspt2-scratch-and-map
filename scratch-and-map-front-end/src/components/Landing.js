import React from 'react'
import ReactDOM from 'react-dom'
import '../index.scss'
import logo from '../img/logowhite.png'


class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

  render () {
    return (
        <div className="landing">
            <img src={logo} />
        </div>
    )
  }
}


export default Landing