import MainContainer from './components/MainContainer/MainContainer.jsx';
import ScreenContainer from './components/ScreenContainer/ScreenContainer.jsx';
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer.jsx';
import Button from './components/Button/Button.jsx';
import { BUTTON_VALUES } from './components/Button/ButtonConst.js';

const App = () => {
  return (
    <MainContainer>
      <ScreenContainer value='0' />
      <ButtonsContainer>
        {BUTTON_VALUES.map((buttonvalue, index) => {
          return (
            <Button
              key={index}
              className={buttonvalue === '=' ? 'equals' : ''}
              value={buttonvalue}
              onClick={() => {
                console.log(`j'ai cliqué sur le button ${buttonvalue}.`);
              }}
            />
          );
        })}
      </ButtonsContainer>
    </MainContainer>
  );
};

export default App;
