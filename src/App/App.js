import React from 'react';
import { SliderBar } from '../SliderBar';
import './App.css';

export const App = () => {
  return (
    <div className="containerApp">
      <div className="centeredContainerApp">
        <SliderBar name="good"/>
        <SliderBar name="fast" />
        <SliderBar name="cheap" />
      </div>
    </div>
  );
}
