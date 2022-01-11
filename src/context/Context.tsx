import React, { useState } from 'react';

const defaultState = {
  isModalActive: false,
  toggleModal: () => {},
};

const Context = React.createContext(defaultState);

const Provider = ({ children }) => {
  const [isModalActive, setModalActive] = useState<boolean>(false);

  const toggleModal = (): void => {
    setModalActive(!isModalActive);
  };

  return (
    <Context.Provider
      value={{
        isModalActive,
        toggleModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

export { Provider };
