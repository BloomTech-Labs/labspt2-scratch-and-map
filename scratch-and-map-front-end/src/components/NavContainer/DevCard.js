import React from 'react'
import { Reveal, Card, Icon, Image, Button } from 'semantic-ui-react'
import icon from '../../img/icon2white.png'
import abi from '../../img/abi.png'
import ryan from '../../img/ryan.png'
import javier from '../../img/javier.png'
import brandon from '../../img/brandon.png'
import courtney from '../../img/courtney.png'
import pascale from '../../img/pascale.png'

const DevCard = () => (
<Card.Group centered itemsPerRow='3' doubling='true'>
      <Reveal animated='fade' >
    <Reveal.Content visible  className="devimagehide">
    <Image src={abi} size='large'  />
    </Reveal.Content>
    <Reveal.Content hidden>
    <Card >
      <Card.Content >
        <Card.Header><p>Abi Franklin</p></Card.Header>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        <a><Icon  name='mail outline' color='white' size='small'  /></a>
        <a><Icon  name='github' color='white' size='small' /></a>
      </Card.Content>
    </Card>
    </Reveal.Content>
  </Reveal>   
  <Reveal animated='fade' >
<Reveal.Content visible  className="devimagehide">
<Image src={ryan} />
</Reveal.Content>
<Reveal.Content hidden>
<Card >
  <Card.Content >
    <Card.Header><p>Ryan Matthews</p></Card.Header>
    <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
    <a><Icon  name='mail outline' color='white' size='large'  /></a>
    <a><Icon  name='github' color='white' size='large' /></a>
  </Card.Content>
</Card>
</Reveal.Content>
</Reveal>   
      <Reveal animated='fade' >
    <Reveal.Content visible  className="devimagehide">
    <Image src={javier} />
    </Reveal.Content>
    <Reveal.Content hidden>
    <Card >
      <Card.Content >
        <Card.Header><p>Javier</p></Card.Header>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        <a><Icon  name='mail outline' color='white' size='large'  /></a>
        <a><Icon  name='github' color='white' size='large' /></a>
      </Card.Content>
    </Card>
    </Reveal.Content>
  </Reveal>   
  <Reveal animated='fade' >
<Reveal.Content visible  className="devimagehide">
<Image src={courtney} />
</Reveal.Content>
<Reveal.Content hidden>
<Card >
  <Card.Content >
    <Card.Header><p>Courtney</p></Card.Header>
    <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
    <a><Icon  name='mail outline' color='white' size='large'  /></a>
    <a><Icon  name='github' color='white' size='large' /></a>
  </Card.Content>
</Card>
</Reveal.Content>
</Reveal>   
      <Reveal animated='fade' >
    <Reveal.Content visible  className="devimagehide">
    <Image src={brandon} />
    </Reveal.Content>
    <Reveal.Content hidden>
    <Card >
      <Card.Content >
        <Card.Header><p>Brandon</p></Card.Header>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        <a><Icon  name='mail outline' color='white' size='large'  /></a>
        <a><Icon  name='github' color='white' size='large' /></a>
      </Card.Content>
    </Card>
    </Reveal.Content>
  </Reveal>   
  <Reveal animated='fade' >
<Reveal.Content visible  className="devimagehide">
<Image src={pascale} />
</Reveal.Content>
<Reveal.Content hidden>
<Card >
  <Card.Content >
    <Card.Header><p>Pascale Pierre</p></Card.Header>
    <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
    <a><Icon  name='mail outline' color='white' size='large'  /></a>
    <a><Icon  name='github' color='white' size='large' /></a>
  </Card.Content>
</Card>
</Reveal.Content>
</Reveal>   
</Card.Group>
)

export default DevCard