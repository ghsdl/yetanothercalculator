import React, { useState } from 'react';
import ScreenContainer from '../ScreenContainer/ScreenContainer.jsx';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer.jsx';
import {
  resetHandler,
  decimalHandler,
  operatorHandler,
  equalHandler,
  percentageHandler,
  flipHandler,
  numberHandler,
} from './MainContainerUtils.js';
import './MainContainer.scss';

const MainContainer = () => {
  let [formula, setFormula] = useState({
    operator: '',
    number: 0,
    result: 0,
  });

  return (
    <div className='mainContainer'>
      <ScreenContainer
        value={formula.number || formula.operator || formula.result}
      />
      <ButtonsContainer
        onClick={(buttonValue) => {
          buttonValue.target.value === 'c'
            ? resetHandler(setFormula, formula)
            : buttonValue.target.value === '.'
            ? decimalHandler(buttonValue, setFormula, formula)
            : buttonValue.target.value === '+' ||
              buttonValue.target.value === '-' ||
              buttonValue.target.value === 'x' ||
              buttonValue.target.value === '/'
            ? operatorHandler(buttonValue, setFormula, formula)
            : buttonValue.target.value === '='
            ? equalHandler(setFormula, formula)
            : buttonValue.target.value === '%'
            ? percentageHandler(setFormula, formula)
            : buttonValue.target.value === '+-'
            ? flipHandler(setFormula, formula)
            : numberHandler(buttonValue, setFormula, formula);
        }}
      />
    </div>
  );
};

export default MainContainer;
