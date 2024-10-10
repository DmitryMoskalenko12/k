'use client';
import Modal from '../Modal/Modal';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ButtonTriggerMobile = ({ classes, text }) => {
  const [activeModal, setActiveModal] = useState(false);
  const {t} = useTranslation('main');

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
        className={classes.buttonMobile}
      >
        {text}
      </button>
      {activeModal ? <Modal setActiveModal={setActiveModal} /> : null}
    </>
  );
};

export default ButtonTriggerMobile;
