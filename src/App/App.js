import React from 'react';
import { SliderBar } from '../SliderBar';
import './App.css';

export const App = ({ updateSelectedOptions, selected }) => {
  return (
    <div className="containerApp">
      <div className="centeredContainerApp">
        <SliderBar
          name="good"
          onClick={() => updateSelectedOptions('good')}
          selected={selected.includes('good')}
        />
        <SliderBar
          name="fast"
          onClick={() => updateSelectedOptions('fast')}
          selected={selected.includes('fast')}
        />
        <SliderBar
          name="cheap"
          onClick={() => updateSelectedOptions('cheap')}
          selected={selected.includes('cheap')}
        />
      </div>
    </div>
  );
}
