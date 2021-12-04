import MainContainer from './components/MainContainer/MainContainer.jsx';
import ScreenContainer from './components/ScreenContainer/ScreenContainer.jsx';
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer.jsx';
import Button from './components/Button/Button.jsx';

const App = () => {
  return (
    <MainContainer>
      <ScreenContainer value='0' />
      <ButtonsContainer>
        <Button
          className=''
          value='C'
          onClick={() => {
            console.log('Je clique sur mon bouton normalement!');
          }}
        />
      </ButtonsContainer>
    </MainContainer>
  );
};

export default App;
