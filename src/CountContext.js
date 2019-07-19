import React from 'react';

const CountContext = React.createContext();

export const withCount = (OldComponent) => {
  return (props) => (
    <CountContext.Consumer>
      {(contextValue) => (
        <OldComponent
          {...props}
          count={contextValue}
        />
      )}
    </CountContext.Consumer>
  );
};

export default CountContext;
