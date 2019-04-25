import React, { Component } from 'react';
import axios from 'axios'
import {CardElement, injectStripe} from 'react-stripe-elements';
import '../styles/CheckoutForm.css';
import { Form, Button, Menu, Dropdown } from "semantic-ui-react";
import _ from 'lodash';

class CheckoutForm extends Component {
  constructor() {
    super();
    this.state = {
      options: [],
      stateOptions: []
    }
  }
  async submit(ev) {}

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(res => {console.log("COUNTRIES API", res.data)
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
      .then(res => {console.log('STATES IN FORM',  res)
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

  render() {
    console.log("PREMIUM", this.state.options)
    return (
      <Form className="ui form">
        <h1 className="ui centered">Enter Personal Payment Details</h1>
        <Form.Group widths='equal'>
      <Form.Input fluid label='First name' placeholder='First name' />
      <Form.Input fluid label='Last name' placeholder='Last name' />
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Input fluid label='Street Address' placeholder='Street Address' />
      <Form.Input fluid label='City' placeholder='city' />
      <Form.Input fluid label='Zip Code' placeholder='Zip Code' />
    </Form.Group>


<Form.Group >
<Dropdown
    placeholder='Select State'
    fluid
    search
    selection
    className='StripeDropdown'
    options={this.state.stateOptions}
    />

<Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    className='StripeDropdown'
    options={this.state.options}
    />
</Form.Group>

<CardElement className='StripeElement' placeholder='Card info' input/>
    
        <Button>Back</Button>
        <Button>Submit</Button>
</Form>
    );
  }
}

export default injectStripe(CheckoutForm);
