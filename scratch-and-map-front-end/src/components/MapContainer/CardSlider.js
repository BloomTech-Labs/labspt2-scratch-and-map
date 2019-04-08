import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
// import ValueViewer from 'docs/src/pages/ValueViewer' // for examples only - displays the table above slider
import { SliderRail, Handle, Track, Tick } from "./SliderRail"; // example render components - source below

const sliderStyle = {
  position: "relative",
  width: "100%"
};

const domain = [0, 4];
const defaultValues = [1];

class CardSlider extends Component {
  state = {
    values: defaultValues.slice(),
    update: defaultValues.slice()
  };

  onChange = values => {
    this.setState({ values }, () => {
      this.props.onChange(this.state.values);
    });
  };

  render() {
    const {
      state: { values, update }
    } = this;

    return (
      <div style={{ height: 120, width: "100%" }}>
        SLIDER VALUE <h3>{values}</h3>
        {/* <ValueViewer values={values} update={update} /> */}
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false} style={{ paddingRight: 20 }}>
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
          <Ticks count={5} values={[0, 1, 2, 3, 4]}>
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
