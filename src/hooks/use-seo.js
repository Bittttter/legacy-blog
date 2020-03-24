import React, { useContext, useState } from 'react';

const SEOInfoContext = React.createContext([{}, () => {}]);

export const SEOInfoProvider = ({ children }) => {
  const contextValue = useState({});
  return (
    <SEOInfoContext.Provider value={contextValue}>
      {children}
    </SEOInfoContext.Provider>
  );
};

export const useSEO = () => {
  const contextValue = useContext(SEOInfoContext);
  return contextValue;
};
