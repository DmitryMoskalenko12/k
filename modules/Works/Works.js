'use client';
import React, { useRef, useEffect, useState } from 'react';
import classes from './works.module.scss';
import WorksLeftDots from '@/ui/svg/Works/WorksLeftDots';
import WorksRightDots from '@/ui/svg/Works/WorksRightDots';
import WorksSvg from '@/ui/svg/Works/WorksSvg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import slide1Mobile from '@/image/slide1Mobile.webp';
import slide2Mobile from '@/image/slide2Mobile.webp';
import slide3Mobile from '@/image/slide3Mobile.webp';
import slide4Mobile from '@/image/slide4Mobile.webp';
import slide5Mobile from '@/image/slide5Mobile.webp';
import ButtonTriggerDesktop from '@/components/heroButtonTrigger/ButtonTriggerDesktop';
import { useTranslation } from 'react-i18next';

const Works = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const {t} = useTranslation('main');

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;

      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.init();
      swiper.navigation.update();

      const updateNavigationState = () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      };

      updateNavigationState();

      swiper.on('slideChange', updateNavigationState);

      return () => {
        swiper.off('slideChange', updateNavigationState);
      };
    }
  }, []);

  return (
    <section className={classes.works} id='works'>
      <div className='container'>
        <div className={classes.titleBlock}>
          <WorksLeftDots />
          <WorksRightDots />
          <WorksSvg />
          <h2 className={classes.title}>{t('our-works')}</h2>
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
         {t('our-company')}
        </div>

        <div className={classes.sliderWrapper}>
          <Swiper
            ref={swiperRef}
            className={classes.swiperMain}
            modules={[Scrollbar, A11y, EffectCoverflow, Navigation]}
            scrollbar={{ draggable: false }}
            pagination={{ clickable: false }}
            grabCursor={true}
            navigation={false}
            breakpoints={{
              320: {
                spaceBetween: 16,
                slidesPerView: 1.14,
              },
              576: {
                spaceBetween: 16,
                slidesPerView: 1.7,
              },
              768: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3.1,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
          >
            <SwiperSlide className='slide'>
              <div className={classes.wrapper1}>
                <h3 className={classes.titleSlide}>{t('transportation-company')}</h3>
                <Image
                  className={classes.img1}
                  src={slide1Mobile}
                  width={244}
                  height={160}
                  alt={t('transportation-company')}
                />
                <Image
                  className={classes.img1Desktop}
                  src={slide1Mobile}
                  width={455}
                  height={275}
                  alt={t('transportation-company')}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
              <div className={classes.wrapper2}>
                <h3 className={classes.titleSlide}>{t('dentist-clinic')}</h3>
                <Image
                  className={classes.img1}
                  src={slide2Mobile}
                  width={244}
                  height={160}
                  alt={t('dentist-clinic')}
                />
                <Image
                  className={classes.img1Desktop}
                  src={slide2Mobile}
                  width={455}
                  height={275}
                  alt={t('dentist-clinic')}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
              <div className={classes.wrapper3}>
                <h3 className={classes.titleSlide}>{t('logistic-company')}</h3>
                <Image
                  className={classes.img1}
                  src={slide3Mobile}
                  width={244}
                  height={160}
                  alt={t('logistic-company')}
                />
                <Image
                  className={classes.img1Desktop}
                  src={slide3Mobile}
                  width={455}
                  height={275}
                  alt={t('logistic-company')}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
              <div className={classes.wrapper4}>
                <h3 className={classes.titleSlide}>{t('transportation-company')}</h3>
                <Image
                  className={classes.img1}
                  src={slide4Mobile}
                  width={244}
                  height={160}
                  alt={t('transportation-company')}
                />
                <Image
                  className={classes.img1Desktop}
                  src={slide4Mobile}
                  width={455}
                  height={275}
                  alt={t('transportation-company')}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
              <div className={classes.wrapper5}>
                <h3 className={classes.titleSlide}>
                  {t('freight-transport-service-company')}
                </h3>
                <Image
                  className={classes.img1}
                  src={slide5Mobile}
                  width={244}
                  height={160}
                  alt={t('freight-transport-service-company')}
                />
                <Image
                  className={classes.img1Desktop}
                  src={slide5Mobile}
                  width={455}
                  height={275}
                  alt={t('freight-transport-service-company')}
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <div
            className={`${isBeginning ? classes.disabled : ''}`}
            ref={prevRef}
          >
            <button
              className={`${classes.prev} ${isBeginning ? classes.disabled : ''}`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M15.488 4.43002C15.3369 4.30081 15.1407 4.23687 14.9425 4.25225C14.7443 4.26762 14.5604 4.36106 14.431 4.51202L8.43101 11.512C8.31455 11.6479 8.25053 11.821 8.25053 12C8.25053 12.179 8.31455 12.3521 8.43101 12.488L14.431 19.488C14.5625 19.6316 14.7447 19.7184 14.939 19.7301C15.1333 19.7419 15.3246 19.6775 15.4724 19.5508C15.6202 19.4241 15.7129 19.2448 15.7309 19.051C15.7489 18.8571 15.6909 18.6638 15.569 18.512L9.98801 12L15.569 5.48802C15.6985 5.33719 15.7627 5.14115 15.7477 4.94296C15.7327 4.74478 15.6397 4.56064 15.489 4.43102'
                  fill={`${isBeginning ? '#CCCCCC' : '#0072DE'}`}
                />
              </svg>
            </button>
          </div>
          <div className={`${isEnd ? classes.disabled : ''}`} ref={nextRef}>
            <button
              className={`${classes.next} ${isEnd ? classes.disabled : ''}`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8.51211 4.43002C8.66319 4.30081 8.85939 4.23687 9.05758 4.25225C9.25578 4.26762 9.43977 4.36106 9.56911 4.51202L15.5691 11.512C15.6856 11.6479 15.7496 11.821 15.7496 12C15.7496 12.179 15.6856 12.3521 15.5691 12.488L9.56911 19.488C9.43763 19.6316 9.25546 19.7184 9.06113 19.7301C8.86679 19.7419 8.67551 19.6775 8.52773 19.5508C8.37995 19.4241 8.28725 19.2448 8.26921 19.051C8.25118 18.8571 8.30924 18.6638 8.43111 18.512L14.0121 12L8.43111 5.48802C8.30167 5.33719 8.23738 5.14115 8.25238 4.94296C8.26738 4.74478 8.36044 4.56064 8.51111 4.43102'
                  fill={`${isEnd ? '#CCCCCC' : '#0072DE'}`}
                />
              </svg>
            </button>
          </div>
        </div>

        <ButtonTriggerDesktop
          classes={classes}
          text={t('journey')}
        />
      </div>
    </section>
  );
};

export default Works;
