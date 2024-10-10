'use client';
import classes from './pricing.module.scss';
import PricingSvg from '@/ui/svg/Pricing/PricingSvg';
import PricinfRightDots from '@/ui/svg/Pricing/PricingRightDots';
import PricingLeftDots from '@/ui/svg/Pricing/PricingLeftDots';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/scss';
import { useTranslation } from 'react-i18next';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { useState, useEffect } from 'react';
import Modal from '@/components/Modal/Modal';

const Pricing = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [plan, setPlan] = useState('');
  const {t} = useTranslation('main');

  useEffect(() => {
    if (activeModal) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'initial';
    }
  }, [activeModal]);

  return (
    <section className={classes.pricing}>
      {activeModal ? (
        <Modal
          plan={plan}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      ) : null}
      <div className='container'>
        <div className={classes.titleBlock}>
          <PricingLeftDots />
          <PricinfRightDots />
          <PricingSvg />
          <h2 className={classes.title}>{t('pricing')}</h2>
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

        <p className={classes.text}>
         {t('the-price')}
        </p>
        <Swiper
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          <SwiperSlide className='slide'>
            <div className={classes.card}>
              <div className={classes.cardSubBlock}>
                <h3 className={classes.titleCard}>{t('start')}</h3>
                <div className={classes.descrCard}>
                 {t('development')}
                </div>
              </div>
              <div className={classes.subBlock2}>
                <div className={classes.price}>300 € </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('development-title')}</div>
                  <div className={classes.res}>{t('up-to-20-days')}</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('design-review')}</div>
                  <div className={classes.res}>2</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('page-sections')}</div>
                  <div className={classes.res}>8</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('adaptive-design')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('social-network')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('opt-in-form2')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M7.5 7L17.5 17M7.5 17L17.5 7'
                        stroke='#4B5563'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('basic-SEO')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M7.5 7L17.5 17M7.5 17L17.5 7'
                        stroke='#4B5563'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('free-domain')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M7.5 7L17.5 17M7.5 17L17.5 7'
                        stroke='#4B5563'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('google-ads')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M7.5 7L17.5 17M7.5 17L17.5 7'
                        stroke='#4B5563'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <a
                onClick={() => {
                  setActiveModal(true);
                  setPlan('start');
                }}
                className={classes.button}
                href='#'
              >
                {t('get-started')}
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <div className={classes.card}>
              <div className={classes.cardSubBlock}>
                <h3 className={classes.titleCard}>
                  {t('strong')} <div className={classes.most}>{t('most-popular')}</div>
                </h3>
                <div className={classes.descrCard}>
                  {t('development-business')}
                </div>
              </div>
              <div className={classes.subBlock2}>
                <div className={`${classes.price} ${classes.price500}`}>
                  500 €
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('development-title')}</div>
                  <div className={classes.res}>{t('up-to-40-days')}</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('design-review')}</div>
                  <div className={classes.res}>5</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('page-sections')}</div>
                  <div className={classes.res}>10</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('adaptive-design')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('social-network')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('opt-in-form2')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('basic-SEO')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('free-domain')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M7.5 7L17.5 17M7.5 17L17.5 7'
                        stroke='#4B5563'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('google-ads')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M7.5 7L17.5 17M7.5 17L17.5 7'
                        stroke='#4B5563'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <a
                onClick={() => {
                  setActiveModal(true);
                  setPlan('strong');
                }}
                className={classes.buttonStrong}
                href='#'
              >
                {t('get-started')}
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <div className={classes.card}>
              <div className={classes.subBlock}>
                <h3 className={classes.titleCard}>{t('powerful')}</h3>
                <div className={classes.descrCard}>
                  {t('development-multi')} <br />
                  <br />
                </div>
              </div>
              <div className={classes.subBlock2}>
                <div className={classes.price}>800 €</div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('development-title')}</div>
                  <div className={classes.res}>{t('up-to-55-days')}</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('design-review')}</div>
                  <div className={classes.res}>8</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('page-sections')}</div>
                  <div className={classes.res}>30</div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('adaptive-design')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('social-network')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('opt-in-form2')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('basic-SEO')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('free-domain')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes.item}>
                  <div className={classes.itemDescr}>{t('google-ads')}</div>
                  <div className={classes.res}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M5 12L10 17L20 7'
                        stroke='#0072DE'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <a
                onClick={() => {
                  setActiveModal(true);
                  setPlan('powerful');
                }}
                className={classes.button}
                href='#'
              >
                {t('get-started')}
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Pricing;
