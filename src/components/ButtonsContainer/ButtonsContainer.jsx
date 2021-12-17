import React from 'react';
import { BUTTON_VALUES } from './ButtonsContainerConst.js';
import './ButtonsContainer.scss';

const ButtonsContainer = ({ onClick }) => {
  return (
    <div className='buttonsContainer'>
      {BUTTON_VALUES.map((buttonValue, index) => {
        return (
          <button
            key={index}
            className={buttonValue === '=' ? 'equals' : ''}
            value={buttonValue}
            onClick={onClick}
          >
            {buttonValue}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsContainer;
