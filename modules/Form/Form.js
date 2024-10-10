'use client';
import classes from './form.module.scss';
import FormSvg from '@/ui/svg/Form/FormSvg';
import FormLeftDots from '@/ui/svg/Form/FormLeftDots';
import FormRightDots from '@/ui/svg/Form/FormRightDots';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import FormInputBlock from '../../components/formInputBlock/FormInputBlock';
import LoadingFormSpinner from '@/ui/LoadingFormSpinner/LoadingFormSpinner';
import contactFormRequest from '@/helpers/formRequest';
import Image from 'next/image';
import formMobile from '@/image/formMobile.webp';
import ThanksMessageForm from '../../components/thanksMessageForm/ThanksMessageForm';
import ErrorMessage from '../../components/errorMessageForm/ErrorMessage';
import formDesktop from '@/image/formDesktop.webp';
import { useTranslation } from 'react-i18next';

const FormSection = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(null);
  const endpoint = 'https://formspree.io/f/xrbgzyez';
  const {t} = useTranslation('main');

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

  useEffect(() => {
    if (success || error) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'initial';
    }
  }, [success, error]);

  const loadingContent =
    loading === true && success === null && error === false ? (
      <LoadingFormSpinner />
    ) : null;
  const initial =
    success === null && loading === false && error === false ? (
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <Formik
          initialValues={{
            name: '',
            contacts: '',
            post: '',
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
      </div>
    ) : null;
  const thanks =
    success === true && loading === false && error === false ? (
      <ThanksMessageForm success={success} setActiveModal={setSuccess} />
    ) : null;
  const errorContent =
    success === null && loading === false && error === true ? (
      <ErrorMessage
        error={error}
        setLoading={setLoading}
        setError={setError}
        setActiveModal={setSuccess}
      />
    ) : null;

  return (
    <section id='contacts' className={classes.formSection}>
      <div className='container'>
        <div className={classes.titleBlock}>
          <FormLeftDots />
          <FormRightDots />
          <FormSvg />
          <h2 className={classes.title}>{t('lets-connect')}</h2>
          <svg
            className={classes.hr}
            xmlns='http://www.w3.org/2000/svg'
            width='39'
            height='2'
            viewBox='0 0 39 2'
            fill='none'
          >
            <path
              d='M1.5 0C0.947715 0 0.5 0.447715 0.5 1C0.5 1.55228 0.947715 2 1.5 2V0ZM1.5 2H38.5V0H1.5V2Z'
              fill='#EC4155'
            />
          </svg>
        </div>

        <div className={classes.text}>
          {t('we-love-making-new-connections')}
        </div>

        <div className={classes.wrapper}>
          <div className={classes.formContent}>
            {thanks}
            {initial}
            {errorContent}
            {loadingContent}
          </div>
          <div className={classes.imgWrapper}>
            <Image
              className={classes.formDesktop}
              src={formDesktop}
              width={553}
              height={419}
              alt='Girl with contacts'
            />
            <Image
              className={classes.formMobile}
              src={formMobile}
              width={328}
              height={219}
              alt='Girl with contacts'
            />
          </div>
        </div>

        <div className={classes.contactWrapper}>
          <h3 className={classes.contactTitle}>{t('get-in-touch')}:</h3>
          <div className={classes.phoneBlock}>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='40' height='40' rx='10' fill='#BCDDFF' />
              <path
                d='M27.314 22.9631L23.4575 21.2348C23.2828 21.16 23.0922 21.1299 22.9029 21.1473C22.7136 21.1647 22.5316 21.229 22.3734 21.3344C22.3574 21.3448 22.3421 21.3562 22.3277 21.3687L20.3121 23.0831C20.2912 23.0945 20.2679 23.1009 20.2441 23.1017C20.2203 23.1026 20.1966 23.0979 20.175 23.088C18.8794 22.4626 17.5373 21.1287 16.9096 19.8511C16.8991 19.8298 16.8937 19.8063 16.8937 19.7825C16.8937 19.7588 16.8991 19.7353 16.9096 19.714L18.6296 17.6731C18.642 17.658 18.6534 17.6422 18.6639 17.6257C18.7679 17.467 18.8307 17.2848 18.8467 17.0957C18.8626 16.9065 18.8312 16.7164 18.7553 16.5424L17.0394 12.6925C16.9419 12.4652 16.7734 12.2757 16.5591 12.1523C16.3448 12.029 16.0962 11.9785 15.8508 12.0084C14.784 12.1486 13.8047 12.6725 13.0961 13.4822C12.3874 14.2918 11.9978 15.3318 12 16.4077C12 22.7998 17.2002 28 23.5922 28C24.6682 28.0021 25.708 27.6124 26.5176 26.9037C27.3272 26.1951 27.8512 25.216 27.9916 24.1492C28.0214 23.9049 27.9716 23.6575 27.8495 23.4438C27.7274 23.2301 27.5396 23.0615 27.314 22.9631ZM23.5922 27.0204C17.7406 27.0204 12.9796 22.2594 12.9796 16.4077C12.9769 15.5701 13.2792 14.7601 13.8301 14.1291C14.3811 13.4981 15.1429 13.0893 15.9732 12.979H15.992C16.0249 12.9797 16.0568 12.9902 16.0836 13.0093C16.1104 13.0284 16.1308 13.0551 16.1422 13.086L17.8647 16.9318C17.8745 16.9532 17.8796 16.9765 17.8796 17C17.8796 17.0235 17.8745 17.0468 17.8647 17.0682L16.1414 19.114C16.1286 19.1286 16.1168 19.1442 16.1063 19.1605C15.9984 19.3251 15.9349 19.5148 15.9219 19.7112C15.9089 19.9075 15.9468 20.1039 16.032 20.2813C16.7561 21.7638 18.25 23.2463 19.7488 23.9705C19.9273 24.0552 20.1247 24.0922 20.3217 24.0778C20.5187 24.0635 20.7086 23.9984 20.873 23.8888C20.8885 23.8782 20.904 23.8668 20.9187 23.8545L22.9334 22.1402C22.9533 22.1295 22.9753 22.1232 22.9979 22.1218C23.0204 22.1204 23.043 22.1239 23.0641 22.132L26.9213 23.8602C26.9528 23.8737 26.9793 23.8967 26.997 23.926C27.0148 23.9553 27.0228 23.9894 27.0201 24.0235C26.9104 24.8543 26.502 25.6166 25.8711 26.1681C25.2403 26.7197 24.4302 27.0226 23.5922 27.0204Z'
                fill='#15171E'
              />
            </svg>
            <div className={classes.phoneTitle}>{t('phone')}</div>
            <div className={classes.phoneText}>
             {t('call-us-for')}
            </div>
            <a className={classes.phone} href='tel:+380633784500'>
              +38 (063) 37 84 500
            </a>
            <a className={classes.phone} href='tel:+37066552742'>
              +37 (066) 55 27 42
            </a>
          </div>

          <div className={classes.emailBlock}>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='40' height='40' rx='10' fill='#BCDDFF' />
              <path
                d='M13.5833 13.583H25.4999C26.2293 13.583 26.9287 13.8727 27.4445 14.3885C27.9602 14.9042 28.2499 15.6037 28.2499 16.333V24.583C28.2499 25.3124 27.9602 26.0118 27.4445 26.5276C26.9287 27.0433 26.2293 27.333 25.4999 27.333H13.5833C12.8539 27.333 12.1544 27.0433 11.6387 26.5276C11.123 26.0118 10.8333 25.3124 10.8333 24.583V16.333C10.8333 15.6037 11.123 14.9042 11.6387 14.3885C12.1544 13.8727 12.8539 13.583 13.5833 13.583ZM13.5833 14.4997C13.1249 14.4997 12.7216 14.6555 12.4099 14.9305L19.5416 19.5413L26.6733 14.9305C26.3616 14.6555 25.9583 14.4997 25.4999 14.4997H13.5833ZM19.5416 20.6505L11.8691 15.673C11.7958 15.8747 11.7499 16.1038 11.7499 16.333V24.583C11.7499 25.0692 11.9431 25.5356 12.2869 25.8794C12.6307 26.2232 13.097 26.4163 13.5833 26.4163H25.4999C25.9861 26.4163 26.4525 26.2232 26.7963 25.8794C27.1401 25.5356 27.3333 25.0692 27.3333 24.583V16.333C27.3333 16.1038 27.2874 15.8747 27.2141 15.673L19.5416 20.6505Z'
                fill='#15171E'
              />
            </svg>
            <div className={classes.emailTitle}>{t('e-mail')}</div>
            <div className={classes.emailText}>
              {t('send-inquiries')}
            </div>
            <a className={classes.email} href='mailto:reo@kyrsor.com'>
              reo@kyrsor.com
            </a>
            <a className={classes.email} href='mailto:office@uviten.com'>
              office@uviten.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
