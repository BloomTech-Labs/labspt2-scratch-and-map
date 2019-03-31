import React, { Component } from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import Slider from "./Slider";
import styled from "styled-components";
import axios from "axios";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render(){  
    let friends_list= this.props.friends;
    let friends =  friends_list.map(friend => <div> <p>{friend.first_name} {friend.last_name}</p></div>)
    console.log("comments: ", friends);
    return ( 
      <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Content image>
        <Image wrapped size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Slider />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <strong>FRIENDS</strong>
          <div> {friends}</div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    );
  }
}

export default Card;
