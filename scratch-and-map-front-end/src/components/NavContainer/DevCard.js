import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import icon from '../../img/icon2white.png'

const DevCard = () => (
<Card.Group centered itemsPerRow='3' doubling='true'>
    <Card className="devTeam" inverted>
      <Card.Content>
        <Image floated='right' size='mini' src={icon} />
        <Card.Header style={{color: "white"}}><h3>Abi Franklin</h3></Card.Header>
        <Card.Description style={{color: "white"}}>
        <Icon.Group style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <a><Icon className="devicon" name='mail outline' color='white' size='big' /></a>
        <a><Icon className="devicon" name='github' color='white' size='big' /></a>
        </Icon.Group>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card className="devTeam" inverted>
      <Card.Content>
        <Image floated='right' size='mini' src={icon} />
        <Card.Header style={{color: "white"}}><h3>Brandon Moll</h3></Card.Header>
        <Card.Description style={{color: "white"}}>
        <Icon.Group style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <a><Icon className="devicon" name='mail outline' color='white' size='big' /></a>
        <a><Icon className="devicon" name='github' color='white' size='big' /></a>
        </Icon.Group>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card className="devTeam" inverted>
      <Card.Content>
        <Image floated='right' size='mini' src={icon} />
        <Card.Header style={{color: "white"}}><h3>Courtney Buratto</h3></Card.Header>
        <Card.Description style={{color: "white"}}>
        <Icon.Group style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <a><Icon className="devicon" name='mail outline' color='white' size='big' /></a>
        <a><Icon className="devicon" name='github' color='white' size='big' /></a>
        </Icon.Group>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card className="devTeam" inverted>
      <Card.Content>
        <Image floated='right' size='mini' src={icon} />
        <Card.Header style={{color: "white"}}><h3>Javier Alvarez</h3></Card.Header>
        <Card.Description style={{color: "white"}}>
        <Icon.Group style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <a><Icon className="devicon" name='mail outline' color='white' size='big' /></a>
        <a><Icon className="devicon" name='github' color='white' size='big' /></a>
        </Icon.Group>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card className="devTeam" inverted>
      <Card.Content>
        <Image floated='right' size='mini' src={icon} />
        <Card.Header style={{color: "white"}}><h3>Pascale Pierre</h3></Card.Header>
        <Card.Description style={{color: "white"}}>
        <Icon.Group style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <a><Icon className="devicon" name='mail outline' color='white' size='big' /></a>
        <a><Icon className="devicon" name='github' color='white' size='big' /></a>
        </Icon.Group>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card className="devTeam" inverted>
      <Card.Content>
        <Image floated='right' size='mini' src={icon} />
        <Card.Header style={{color: "white"}}><h3>Ryan Matthews</h3></Card.Header>
        <Card.Description style={{color: "white"}}>
        <Icon.Group style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <a><Icon className="devicon" name='mail outline' color='white' size='big' /></a>
        <a><Icon className="devicon" name='github' color='white' size='big' /></a>
        </Icon.Group>
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default DevCard