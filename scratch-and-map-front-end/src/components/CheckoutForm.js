import React, { Component } from 'react';
import axios from 'axios'
import {injectStripe} from 'react-stripe-elements';
import '../styles/CheckoutForm.css';
import { Form, Button, Menu, Dropdown } from "semantic-ui-react";


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    }
  }
  async submit(ev) {}

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(res => {console.log("COUNTRIES API", res.data)
             res.data.map(item => {
              console.log("RES ITEM", item.name) 
              this.state.options.push(item.name)
            })
  })
  }



  render() {
    console.log("PREMIUM",this.state.countries)
    return (
      <Form className="ui form">
        <h1 className="ui centered">Enter Personal Payment Details</h1>

        <div className="field">
            <label >First and Last Name</label>
            <div className="two fields">
                <div className="field">
                    <input type="text" name="first-name" placeholder="First Name" /> 
                </div>
                <div className="field">
                    <input type="text" name="last-name" placeholder="Last Name" />
                </div>
            </div>
        </div>
       
        <div className="field">
            <label>Billing Address</label>
            <div className="fields">
                <div className="twelve wide field">
                    <input type="text" name="shipping[address]" placeholder="Street Address" />
                </div>
                <div className="four wide field">
                    <input type="text" name="shipping[address-2]" placeholder="Apt #" />
                </div>
            </div>
        </div>

<div className="two fields">
    <div className="field">
      <label>State</label>
      <select className="ui fluid dropdown">
        <option value="">State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
    </div>
</div>


    

<Menu>
    <Dropdown text='Country' option={this.state.options}  simple item />
  </Menu>
        <Button>Back</Button>
        <Button>Save And Continue </Button>
</Form>
    );
  }
}

export default injectStripe(CheckoutForm);
