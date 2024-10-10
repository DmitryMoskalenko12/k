'use client';
import Link from 'next/link';
import classes from './errorMessage.module.scss';
import Image from 'next/image';
import errorMobile from '@/image/errorMobile.webp';
import errorDesktop from '@/image/errorDesktop.webp';
import { useTranslation } from 'react-i18next';

const ErrorMessage = ({ setActiveModal }) => {
  const {t} = useTranslation('main');

  return (
    <div className={classes.content}>
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
      <h2 className={classes.errorTitle}>
         {t('sending-the-form')}
      </h2>

      <div className={classes.imgWrapper}>
        <Image
          className={classes.imgMobile}
          src={errorMobile}
          width={301}
          height={226}
          alt='Error'
        />
        <Image
          className={classes.imgDesktop}
          src={errorDesktop}
          width={553}
          height={415}
          alt='Error'
        />
      </div>

      <Link className={classes.link} href='/'>
       {t('main-page')}
      </Link>
    </div>
  );
};

export default ErrorMessage;
