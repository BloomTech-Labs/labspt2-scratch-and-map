import React, { Component } from "react";
import returnCode from "../helper"
import { Button, Header, Image, Modal, Form, TextArea } from 'semantic-ui-react';
import CardSlider from "./CardSlider";

class Card extends Component {
  constructor(props) {
    super(props);
 
  }
  
  render()
 {  
  let code = this.props.country_code
  console.log(this.props.country_code)
  const friends = [
    {id:9,
      first_name: "Abi",
      last_name: "French"
    },
    {id:1,
      first_name: "Javier",
      last_name: "English"
    },
    {id:2,
      first_name: "Ryan",
      last_name: "Adams"
    },
    {id:3,
      first_name: "Bull",
      last_name: "Moll"
    },
    {id:4,
      first_name: "Courtney",
      last_name: "B Vance"
    }
  ];

  const cardStyle = {  
    zIndex: 11,
    border: '1px solid steelblue',
  }

    let friendList =  friends.map(friend  => <div key={friend.id}> <p>{friend.first_name} {friend.last_name}</p></div>)
    return ( 
      <div style={cardStyle}>
      <Modal trigger={<Button>Show Modal</Button>} open={this.props.open}>
      <Modal.Content image>
      <Header>Haiti</Header>
        <Image wrapped size='small' src='https://restcountries.eu/data/hti.svg' />
        <CardSlider />
        <Modal.Description>
          <p>Notes:{code} {this.props.country_code}</p> 
          {<Form>
            <TextArea placeholder='Travel Notes' />
          </Form>}
          <strong>FRIENDS</strong>
          <div> {friendList}</div>
          <Button onClose={this.props.onClose} >Close</Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    </div>
    );
  }
}

export default Card;

