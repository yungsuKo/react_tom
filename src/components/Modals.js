import { useContext } from 'react';
import {
  ModalsDispatchContext,
  ModalsStateContext,
} from '../context/ModalContext';

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;

    const onClose = () => {
      close(Component);
    };
    const handleSubmit = async () => {
      if (typeof onSubmit === 'function') {
        await onSubmit();
      }
      onClose();
    };

    return (
      <Component
        key={index}
        onClose={onClose}
        handleSubmit={handleSubmit}
        {...restProps}
      />
    );
  });
};

export default Modals;
