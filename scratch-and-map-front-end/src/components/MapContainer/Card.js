import React, { Component } from "react";
import returnCode from "../helper"
import { Button, Header, Image, Modal, Form, TextArea } from 'semantic-ui-react';
import Slider from "./Slider";

class Card extends Component {
  constructor(props) {
    super(props);
  
  }
  render(){  
    let friends_list= this.props.friends;
    let friends =  friends_list.map(friend => <div> <p>{friend.first_name} {friend.last_name}</p></div>)
    return ( 
      <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Content image>
      <Header>Haiti</Header>
        <Image wrapped size='small' src='https://restcountries.eu/data/hti.svg' />
        <Slider />
        <Modal.Description>
         
          <p>Notes:</p>
          {<Form>
            <TextArea placeholder='Travel Notes' />
          </Form>}
          <strong>FRIENDS</strong>
          <div> {friends}</div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    );
  }
}

export default Card;
