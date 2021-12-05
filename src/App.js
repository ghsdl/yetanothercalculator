import React, { useState } from 'react';
import MainContainer from './components/MainContainer/MainContainer.jsx';
import ScreenContainer from './components/ScreenContainer/ScreenContainer.jsx';
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer.jsx';
import Button from './components/Button/Button.jsx';
import { BUTTON_VALUES } from './components/Button/ButtonConst.js';
import {
  numberHandler,
  resetHandler,
} from './components/Button/ButtonUtils.js';

const App = () => {
  let [formula, setFormula] = useState({
    operator: '',
    number: 0,
    result: 0,
  });
  console.log('🎄 ~ App ~ formula', formula);
  return (
    <MainContainer>
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
    </MainContainer>
  );
};

export default App;
