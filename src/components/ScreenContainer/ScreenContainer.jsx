import React from 'react';
import './ScreenContainer.scss';

const ScreenContainer = ({ value }) => {
  return (
    <div className={value.toString().length > 15 ? 'screenContainer--small' : 'screenContainer'}>
      {value}
    </div>
  );
};

export default ScreenContainer;
