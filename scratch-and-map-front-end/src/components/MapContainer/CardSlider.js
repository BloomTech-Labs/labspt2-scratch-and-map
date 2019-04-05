import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'
import Handle from "./Handle";
import Track from "./Track";
import Tick from "./Tick";

class CardSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0
    };
    
  }
  render()  {
    const sliderStyle = {  // Give the slider some width
      position: 'relative',
      width: '50%',
      height: 80,
      border: '1px solid steelblue',
      padding: '50px'
    }
    
    const railStyle = { 
      position: 'absolute',
      width: '100%',
      height: 10,
      marginTop: 35,
      borderRadius: 5,
      backgroundColor: '#8B9CB6',
    }


    return (
      <div>
       <Slider
    rootStyle={sliderStyle}
    domain={[0, 3]}
    step={1}
    mode={2}
    values={[4]}
  >
   <Rail>
      {({ getRailProps }) => (  // adding the rail props sets up events on the rail
        <div style={railStyle} {...getRailProps()} /> 
      )}
    </Rail>
    <Handles>
      {({ handles, getHandleProps }) => (
        <div className="slider-handles">
          {handles.map(handle => (
            <Handle
              key={handle.id}
              handle={handle}
              getHandleProps={getHandleProps}
            />
          ))}
        </div>
      )}
    </Handles>
    <Tracks right={false}>
      {({ tracks, getTrackProps }) => (
        <div className="slider-tracks">
          {tracks.map(({ id, source, target }) => (
            <Track
              key={id}
              source={source}
              target={target}
              getTrackProps={getTrackProps}
            />
          ))}
        </div>
      )}
    </Tracks>
    <Ticks values={['WishList', 'Transited', 'Visited', 'Lived']}>
    {/* // pass in an array of values// */}
      {({ ticks }) => (
        <div className="slider-ticks">
          {ticks.map(tick => (
            <Tick key={tick.id} tick={tick} count={ticks.length} />
          ))} 
        </div>
      )} 
    </Ticks>
</Slider>
      </div>
    );
  }
}

export default CardSlider;
