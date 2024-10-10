'use client'
import classes from './modal.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import FormInputBlock from '../formInputBlock/FormInputBlock';
import LoadingFormSpinner from '@/ui/LoadingFormSpinner/LoadingFormSpinner';
import contactFormRequest from '@/helpers/formRequest';
import Image from 'next/image';
import formDesktop from '@/image/formDesktop.webp';
import ThanksMessage from '../ThanksMessage/ThanksMessage';
import ErrorMessage from '../ErrorMessageModal/ErrorMessage';
import { useTranslation } from 'react-i18next';

const Modal = ({ setActiveModal, activeModal, plan }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(null);
  const {t} = useTranslation('main');
  const endpoint = 'https://formspree.io/f/xrbgzyez';
  
  const validationOrderForm = Yup.object().shape({
    name: Yup.string().required(t('required')),
    contacts: Yup.string().required(t('required')),
  });

  const onGetInfo = (value) => {
    contactFormRequest(
      endpoint,
      'POST',
      value,
      setSuccess,
      setLoading,
      setError,
    );
  };

  const loadingContent =
    loading === true && success === null && error === false ? (
      <LoadingFormSpinner />
    ) : null;
  const initial =
    success === null && loading === false && error === false ? (
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setActiveModal(null)} className={classes.close}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
          >
            <rect
              x='0.75'
              y='0.75'
              width='30.5'
              height='30.5'
              rx='4.25'
              stroke='#868686'
              strokeWidth='1.5'
            />
            <path
              d='M9.3335 9.33334L22.6668 22.6667M9.3335 22.6667L22.6668 9.33334'
              stroke='#15171E'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <div className={classes.titleWrapper}>
          <h2 className={classes.modalTitle}>{t('lets-connect')}</h2>
          <svg
            className={classes.titleSvg}
            xmlns='http://www.w3.org/2000/svg'
            width='38'
            height='2'
            viewBox='0 0 38 2'
            fill='none'
          >
            <path
              d='M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V0ZM1 2H38V0H1V2Z'
              fill='#EC4155'
            />
          </svg>
        </div>
        <div className={classes.modalText}>
          {t('we-love-making-new-connections')}
        </div>
        <div className={classes.modalContent}>
          <Formik
            initialValues={{
              name: '',
              contacts: '',
              post: '',
              plan: plan ? plan : '',
            }}
            validationSchema={validationOrderForm}
            onSubmit={(values, { resetForm }) => {
              onGetInfo(values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form className={classes.form} noValidate>
                <FormInputBlock
                  type={'text'}
                  classes={classes}
                  error={errors.name}
                  touched={touched.name}
                  name={'name'}
                  placeholder={t('enter-your-name')}
                  label={t('name')}
                />
                <FormInputBlock
                  type={'text'}
                  classes={classes}
                  error={errors.contacts}
                  touched={touched.contacts}
                  name={'contacts'}
                  placeholder={t('enter-email-or-phone-number')}
                  label={t('email-or-phone-number')}
                />
                <div className={classes.textAreaWrapper}>
                  <label htmlFor='area' className={classes.label}>
                    {t('message')}
                  </label>
                  <Field
                    id='area'
                    type={'text'}
                    className={classes.textArea}
                    name={'post'}
                    placeholder={t('type-message-here')}
                    component='textarea'
                  />
                </div>
                <button type='submit' className={classes.button}>
                  {t('send')}
                </button>
              </Form>
            )}
          </Formik>

          <div className={classes.imgWrapper}>
            <Image
              src={formDesktop}
              width={553}
              height={419}
              alt='Girl with contacts'
            />
          </div>
        </div>
      </div>
    ) : null;
  const thanks =
    success === true && loading === false && error === false ? (
      <ThanksMessage setActiveModal={setActiveModal} />
    ) : null;
  const errorContent =
    success === null && loading === false && error === true ? (
      <ErrorMessage activeModal={activeModal} setActiveModal={setActiveModal} />
    ) : null;

  return (
    <div className={classes.modal}>
      {initial}
      {loadingContent}
      {thanks}
      {errorContent}
    </div>
  );
};

export default Modal;
