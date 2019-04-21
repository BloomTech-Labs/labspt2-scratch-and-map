import React, { Component } from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import '../styles/CheckoutForm.css'

class CheckoutForm extends Component {
    constructor(props) {
    super(props);
    }
    async submit(ev) {

    }

    

    

    render() {
        return(
            // <div className='checkout'>
            //     <p>Complete Purchase</p>
            //     <CardElement />
            //     <button onClick={this.submit}>Send</button>
            // </div>
            <form action="/charge" method="post" id="payment-form">
                <div class="form-row">
                    <label for="card-element">
                    Credit or debit card
                    </label>
                    <div id="card-element">
                    </div>
                    <div id="card-errors" role="alert"></div>
                </div>
            <button>Submit Payment</button>
            </form>
        )
    }
}

export default injectStripe(CheckoutForm)