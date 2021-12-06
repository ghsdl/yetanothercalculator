import React, { useState } from 'react';
import { BUTTON_VALUES } from '../Button/ButtonConst.js';
import Button from '../Button/Button.jsx';
import ScreenContainer from '../ScreenContainer/ScreenContainer.jsx';
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer.jsx';
import { resetHandler, numberHandler } from '../Button/ButtonUtils.js';
import './MainContainer.css';

const MainContainer = () => {
  let [formula, setFormula] = useState({
    operator: '',
    number: 0,
    result: 0,
  });
  return (
    <div className='mainContainer'>
      <ScreenContainer
        // if number exists then number, else result if '=' is pressed
        value={formula.number ? formula.number : formula.result}
      />
      <ButtonsContainer>
        {BUTTON_VALUES.map((buttonValue, index) => {
          return (
            <Button
              key={index}
              className={buttonValue === '=' ? 'equals' : ''}
              value={buttonValue}
              // TODO: if/else statements to handle functions from utils file
              onClick={() =>
                buttonValue === 'C'
                  ? resetHandler(formula, setFormula)
                  : numberHandler(buttonValue, formula, setFormula)
              }
            />
          );
        })}
      </ButtonsContainer>
    </div>
  );
};

export default MainContainer;
