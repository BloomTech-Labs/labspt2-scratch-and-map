import React from 'react'
import { Reveal, Card, Icon, Image, Button } from 'semantic-ui-react'
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
    <a href="https://github.com/AbiFranklin"target="_blank" ><Image src={abi} size='large'/></a>
    </Reveal.Content>
    <Reveal.Content hidden>
    <Card >
      <Card.Content >
        <Card.Header><p>Abi Franklin</p></Card.Header>
        <Card.Description>A Full Stack Developer South Texas.</Card.Description>
        <a href="https://github.com/AbiFranklin"target="_blank" ><Icon  name='github' color='white' size="large"/></a>
      </Card.Content>
    </Card>
    </Reveal.Content>
  </Reveal> 

  <Reveal animated='fade' >
   <Reveal.Content visible  className="devimagehide">
    <a href="https://github.com/cocoitali"target="_blank" ><Image src={courtney} size='large'/></a>
    </Reveal.Content>
    <Reveal.Content hidden>
    <Card >
      <Card.Content >
        <Card.Header><p>Brandon Moll</p></Card.Header>
        <Card.Description>Lorem ipsum dolor sit amet, consectetur elit.</Card.Description>
        <a href="https://github.com/cocoitali"target="_blank" ><Icon  name='github' color='white' size="large"/></a>
      </Card.Content>
    </Card>
    </Reveal.Content>
  </Reveal>


  <Reveal animated='fade' >
    <Reveal.Content visible  className="devimagehide">
    <a href="https://github.com/ryntak94"target="_blank" ><Image src={ryan} size='large'/></a>
    </Reveal.Content>
    <Reveal.Content hidden>
    <Card >
      <Card.Content >
        <Card.Header><p>Ryan Matthews</p></Card.Header>
        <Card.Description>Lorem ipsum dolor sit amet, consectetur elit.</Card.Description>
        <a href="https://github.com/ryntak94"target="_blank" ><Icon  name='github' color='white' size="large"/></a>
      </Card.Content>
    </Card>
    </Reveal.Content>
  </Reveal> 

    <Reveal animated='fade' >
    <Reveal.Content visible  className="devimagehide">
    <a href="https://github.com/jalvarez2020"target="_blank" ><Image src={javier} size='large'/></a>
    </Reveal.Content>
    <Reveal.Content hidden>
    <Card >
      <Card.Content >
        <Card.Header><p>Javier Alverez</p></Card.Header>
        <Card.Description>Lorem ipsum dolor sit amet, consectetur elit.</Card.Description>
        <a href="https://github.com/jalvarez2020"target="_blank" ><Icon  name='github' color='white' size="large"/></a>
      </Card.Content>
    </Card>
    </Reveal.Content>
  </Reveal> 

    <Reveal animated='fade' >
    <Reveal.Content visible  className="devimagehide">
    <a href="https://github.com/BrandonMoll"target="_blank" ><Image src={brandon} size='large'/></a>
    </Reveal.Content>
    <Reveal.Content hidden>
    <Card >
      <Card.Content >
        <Card.Header><p>Brandon Moll</p></Card.Header>
        <Card.Description>Lorem ipsum dolor sit amet, consectetur elit.</Card.Description>
        <a href="https://github.com/BrandonMoll"target="_blank" ><Icon  name='github' color='white' size="large"/></a>
      </Card.Content>
    </Card>
    </Reveal.Content>
  </Reveal> 

  <Reveal animated='fade' >
    <Reveal.Content visible  className="devimagehide">
    <a href="https://github.com/PSquared0"target="_blank" ><Image src={pascale} size='large'/></a>
    </Reveal.Content>
    <Reveal.Content hidden>
    <Card >
      <Card.Content >
        <Card.Header><p>Pascale Pierre</p></Card.Header>
        <Card.Description>A Full Stack Developer with a design background.</Card.Description>
        <a href="https://github.com/PSquared0"target="_blank" ><Icon  name='github' color='white' size="large"/></a>
      </Card.Content>
    </Card>
    </Reveal.Content>
  </Reveal> 


  
  

</Card.Group>
)

export default DevCard