import React from 'react';
import './ButtonsContainer.scss';

const BUTTON_VALUES = [
  'c',
  '+-',
  '%',
  '/',
  7,
  8,
  9,
  'x',
  4,
  5,
  6,
  '-',
  1,
  2,
  3,
  '+',
  0,
  '.',
  '=',
];

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
