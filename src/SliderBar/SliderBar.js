import React from 'react';
import PropTypes from 'prop-types';
import './SliderBar.css';

export const SliderBar = props => {
  const sliderBar = "slider " + props.name

  return (
    <div className="rowSliderBar">
      <div className="colSliderBar">
        <label className="labelSliderBar">
          <input type="checkbox" />
          <span className={sliderBar} />
        </label>
      </div>
      <div className="colSliderBar right">
        {props.name}
      </div>
    </div>
  );
}

SliderBar.propTypes = {
  name: PropTypes.string.isRequired
}
