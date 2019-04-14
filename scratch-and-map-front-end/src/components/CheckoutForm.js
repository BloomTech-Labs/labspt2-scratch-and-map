import React, { Component } from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'

class CheckoutForm extends Component {
    constructor(props) {
    super(props);
    }
    async submit(ev) {

    }

    render() {
        return(
            <div>
                <p>Complete Purchase</p>
                <CardElement />
                <button onClick={this.submit}>Send</button>
            </div>
        )
    }
}

export default injectStripe(CheckoutForm)