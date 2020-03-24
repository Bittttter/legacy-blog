import React, { useContext, useState } from 'react';

const CurrentInViewportContext = React.createContext([
  null,
  () => {},
]);

export const CurrentInViewportProvider = ({ children }) => {
  const contextValue = useState(null);
  return (
    <CurrentInViewportContext.Provider value={contextValue}>
      {children}
    </CurrentInViewportContext.Provider>
  );
};

export const useCurrentInViewport = () => {
  const contextValue = useContext(CurrentInViewportContext);
  return contextValue;
};
