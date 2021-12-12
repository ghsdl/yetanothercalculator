import React, { useState } from 'react';
import ScreenContainer from '../ScreenContainer/ScreenContainer.jsx';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer.jsx';
import './MainContainer.scss';

const MainContainer = () => {
  let [formula, setFormula] = useState({
    operator: '',
    number: 0,
    result: 0,
  });

  // C BUTTON
  const resetHandler = () => {
    setFormula({
      ...formula,
      operator: '',
      number: 0,
      result: 0,
    });
  };

  // 0 TO 9 BUTTONS
  const numberHandler = (event) => {
    const value = event.target.value;
    const { operator, number, result } = formula;
    setFormula({
      ...formula,
      number:
        number === 0 && value === '0'
          ? '0'
          : number % 1 === 0
          ? Number(number + value)
          : number + value,
      result: !operator ? 0 : result,
    });
  };

  // . BUTTON
  const decimalHandler = (event) => {
    const value = event.target.value;
    const { number } = formula;
    setFormula({
      ...formula,
      number: !number.toString().includes('.') ? number + value : number,
    });
  };

  // + – x / BUTTONS
  const operatorHandler = (event) => {
    const value = event.target.value;
    const { number, result } = formula;
    setFormula({
      ...formula,
      operator: value,
      number: 0,
      result: !result && number ? number : result,
    });
  };

  // = BUTTON
  const equalHandler = () => {
    const { operator, number, result } = formula;
    if (formula.operator && formula.number) {
      const doTheMaths = (a, b, operator) =>
        operator === '+'
          ? a + b
          : operator === '-'
          ? a - b
          : operator === 'x'
          ? a * b
          : a / b;

      setFormula({
        ...formula,
        operator: '',
        number: 0,
        result: doTheMaths(result, number, operator),
      });
    }
  };

  return (
    <div className='mainContainer'>
      <ScreenContainer
        value={formula.number ? formula.number : formula.result}
      />

      <ButtonsContainer
        onClick={(buttonValue) => {
          buttonValue.target.value === 'c'
            ? resetHandler()
            : buttonValue.target.value === '.'
            ? decimalHandler(buttonValue)
            : buttonValue.target.value === '+' ||
              buttonValue.target.value === '-' ||
              buttonValue.target.value === 'x' ||
              buttonValue.target.value === '/'
            ? operatorHandler(buttonValue)
            : buttonValue.target.value === '='
            ? equalHandler()
            : numberHandler(buttonValue);
        }}
      />
    </div>
  );
};

export default MainContainer;
