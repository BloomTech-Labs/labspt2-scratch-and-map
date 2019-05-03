import React, { Component } from "react";
import axios from "axios";
import { CardElement, injectStripe } from "react-stripe-elements";
import "../styles/CheckoutForm.css";
import { Form, Button, Dropdown } from "semantic-ui-react";
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

redirect = () =>{
  
}




async submit(ev) {
  try {
  let {token} = await this.props.stripe.createToken({
    name: this.state.name,
    address_line1: this.state.streetAddress,
    address_city: this.state.city,
    address_state: this.state.stateSelection,
    address_country: this.state.countrySelection
  });


  this.props.stripe.redirectToCheckout({
          items: [{sku: 'sku_EzIHRsK0Gl5QOc', quantity: 1}],
          // Note that it is not guaranteed your customers will be redirected to this
          // URL *100%* of the time, it's possible that they could e.g. close the
          // tab between form submission and the redirect.
          successUrl: 'https://scratchandmap.club',
          cancelUrl: 'https://scratchandmap.club',
        })

  let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/charge`, {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id
  });
  console.log('PAYMENT',response)
  if (response.ok) console.log("Purchase Complete!") }
  catch(error) {
    console.log("PAYMENT ERROR", error);
  }
}

  render() {
    return (
      <Form className="ui form">
        <h1 className="ui centered">Enter Personal Payment Details</h1>
        <Form.Group widths="equal">
          <Form.Input
            onChange={this.handleInputChange}
            fluid
            name="name"
            placeholder="Name on card"
            required
          />
          <Form.Input
            onChange={this.handleInputChange}
            type="email"
            fluid
            name="email"
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            onChange={this.handleInputChange}
            fluid
            name="streetAddress"
            placeholder="Street Address"
            required
          />
          <Form.Input
            onChange={this.handleInputChange}
            fluid
            name="city"
            placeholder="city"
            required
          />
          <Form.Input
            onChange={this.handleInputChange}
            fluid
            name="zipCode"
            placeholder="Zip Code"
            required
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Dropdown 
            placeholder="Select State"
            onChange={this.handleStateSelection}
            required
            fluid
            width={3}
            search
            selection
            className="StripeDropdown"
            options={this.state.stateOptions}
          />

          <Dropdown
            placeholder="Select Country"
            onChange={this.handleCountrySelection}
            required
            fluid
            search
            selection
            className="StripeDropdown"
            options={this.state.options}
          />
        </Form.Group>

        <CardElement className="StripeElement" placeholder="Card info" input />
<<<<<<< HEAD

        <Link to="/"><Button>Back</Button></Link>
        <Button onClick={this.submit}>Checkout</Button>
      </Form>
=======
<div>
        <Button className="stripe-buttons">Back</Button>
        <Button onClick={this.submit}>Submit</Button>
        </div>
         </Form>
     
>>>>>>> 6254e4f5c94f5e71d1311580e7169fe9c53a704d
    );
  }
}

export default injectStripe(CheckoutForm);