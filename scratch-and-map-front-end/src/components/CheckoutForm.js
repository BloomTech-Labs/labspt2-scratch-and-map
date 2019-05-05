import React, { Component } from "react";
import axios from "axios";
import { CardElement, injectStripe } from "react-stripe-elements";
import "../styles/CheckoutForm.css";
import { Container, Button,  } from "semantic-ui-react";
import {Route, Link} from 'react-router-dom'
require("dotenv").config();

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      options: [],
      stateOptions: [],
      completed: false
    };
  }

    componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(res => {
        res.data.forEach(country => {
            let countryOptions = {
                key: country.alpha3Code,
                value: country.alpha3Code,
                text: country.name
            }
            this.state.options.push(countryOptions);
        })
            
  })
    axios.get(`https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json`)
      .then(res => {
        res.data.forEach(state => {
          let stateOptions = {
            key: state.abbreviation,
            value: state.abbreviation,
            text: state.name,
          }
            this.state.stateOptions.push(stateOptions)
        })
    
    })
}

handleInputChange = e => {
  this.setState({ [e.target.name]: e.target.value });
};


handleStateSelection = (e, {value}) => this.setState({ stateSelection: value })

handleCountrySelection = (e, {value}) => this.setState({ countrySelection: value })

// handleCheckout = () => {
//   checkoutButton.addEventListener('click', function () {
//     // When the customer clicks on the button, redirect
//     // them to Checkout.
//     this.props.stripe.redirectToCheckout({
//       items: [{sku: 'sku_EzIHRsK0Gl5QOc', quantity: 1}],
  
//       // Note that it is not guaranteed your customers will be redirected to this
//       // URL *100%* of the time, it's possible that they could e.g. close the
//       // tab between form submission and the redirect.
//       successUrl: 'https://your-website.com/success',
//       cancelUrl: 'https://your-website.com/canceled',
//     })
//     .then(function (result) {
//       if (result.error) {
//         // If `redirectToCheckout` fails due to a browser or network
//         // error, display the localized error message to your customer.
//         var displayError = document.getElementById('error-message');
//         displayError.textContent = result.error.message;
//       }
//     });
//   });
// }





async submit(ev) {
  try {
  this.props.stripe.redirectToCheckout({
          items: [{sku: 'sku_EzIHRsK0Gl5QOc', quantity: 1}],
          // Note that it is not guaranteed your customers will be redirected to this
          // URL *100%* of the time, it's possible that they could e.g. close the
          // tab between form submission and the redirect.
          successUrl: 'https://scratchandmap.club',
          cancelUrl: 'https://scratchandmap.club',
        })
}
  catch(error) {
    console.log("PAYMENT ERROR", error);
  }
}

  render() {
    return (

      <Container>
            <h1>Premium Benefits</h1>
              <ul>
                <li>Track an unlimited amount of country visits</li>
                <li>Create notes of travels</li>
                <li>See Friends visited locations</li>
                <li>App becomes Ad free</li>
                <li>Newest features available to Premium users first</li>
              </ul>
            <Button className="stripe-buttons">Back</Button>
            <Button onClick={this.submit}>Sign up</Button>
      </Container>
       
        
       
     
    );
  }
}

export default injectStripe(CheckoutForm);