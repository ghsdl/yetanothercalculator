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

  const numClickHandler = (event) => {
    const value = event.target.value;
    setFormula({
      ...formula,
      number:
        formula.number === 0 && value === '0'
          ? '0'
          : formula.number % 1 === 0
          ? Number(formula.number + value)
          : formula.number + value,
      result: !formula.operator ? 0 : formula.result,
    });
  };
  return (
    <div className='mainContainer'>
      <ScreenContainer
        value={formula.number ? formula.number : formula.result}
      />
      <ButtonsContainer
        onClick={(buttonValue) => numClickHandler(buttonValue)}
      />
    </div>
  );
};

export default MainContainer;
