import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';


axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(res => {console.log("COUNTRIES API", res.data)
      res.data.map(country => {this.state.options.map(items => {
        return {
          key: items.alpha3code,
          text: items.name,
        }
      })})
  })

const countryOptions = () => {
    <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
  />>
}


export default countryOptions