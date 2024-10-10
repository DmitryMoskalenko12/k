'use client';
import Modal from '../Modal/Modal';
import { useState, useEffect } from 'react';

const ButtonTriggerDesktop = ({ classes, text }) => {
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    if (activeModal) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'initial';
    }
  }, [activeModal]);

  return (
    <>
      <button
        onClick={() => setActiveModal(true)}
        className={classes.buttonDesktop}
      >
        {text}
      </button>
      {activeModal ? (
        <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
      ) : null}
    </>
  );
};

export default ButtonTriggerDesktop;
