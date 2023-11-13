import { useState } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './ModalContext';
import { useMemo } from 'react';

const ModalsProvider = ({ children }) => {
  const [openModals, setOpenModals] = useState([]);

  const open = (Component, props) => {
    setOpenModals((modals) => {
      return [...modals, { Component, props }];
    });
  };
  const close = (Component) => {
    setOpenModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };
  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openModals}>
      <ModalsDispatchContext value={dispatch}>{children}</ModalsDispatchContext>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
