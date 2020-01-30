import React from 'react';
import PropTypes from 'prop-types';
import './SliderBar.css';

export const SliderBar = props => {
  const { onClick, name, selected } = props
  const sliderBar = "slider " + name

  return (
    <div className="rowSliderBar">
      <div className="colSliderBar">
        <label className="labelSliderBar">
          <input type="checkbox" onClick={onClick} checked={selected} />
          <span className={sliderBar} />
        </label>
      </div>
      <div className="colSliderBar right">
        {name}
      </div>
    </div>
  );
}

SliderBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
}
