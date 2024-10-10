'use client';
import classes from './team.module.scss';
import TeamSvg from '@/ui/svg/Team/TeamSvg';
import TeamLeftDots from '@/ui/svg/Team/TeamLeftDots';
import TeamRightDots from '@/ui/svg/Team/TeamRightDots';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Navigation, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import team1 from '@/image/team1.webp';
import team2 from '@/image/team2.webp';
import team3 from '@/image/team3.webp';
import { useTranslation } from 'react-i18next';

const Team = () => {

  const {t} = useTranslation('main');

  return (
    <section className={classes.team}>
      <div className='container'>
        <div className={classes.titleBlock}>
          <TeamLeftDots />
          <TeamRightDots />
          <TeamSvg />
          <h2 className={classes.title}>{t('our-team')}</h2>
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
          {t('our-team-your')}
        </div>

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
              slidesPerView: 1.10,
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
              <div className={classes.imgWrapper}>
                <Image
                  className={classes.teamMobile}
                  src={team1}
                  width={268}
                  height={368}
                  alt='CEO'
                />
                <Image
                  className={classes.teamDesktop}
                  src={team1}
                  width={328}
                  height={453}
                  alt='CEO'
                />
              </div>
              <h3 className={classes.cardTitle}>{t('Oleksandr')}</h3>
              <div className={classes.position}>СEO, Project manager</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <div className={classes.card}>
              <div className={classes.imgWrapper}>
                <Image
                  className={classes.teamMobile}
                  src={team2}
                  width={268}
                  height={368}
                  alt='Head of UI/UX Design'
                />
                <Image
                  className={classes.teamDesktop}
                  src={team2}
                  width={328}
                  height={453}
                  alt='Head of UI/UX Design'
                />
              </div>
              <h3 className={classes.cardTitle}>{t('Ursula')}</h3>
              <div className={classes.position}>Head of UI/UX Design</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <div className={classes.card}>
              <div className={classes.imgWrapper}>
                <Image
                  className={classes.teamMobile}
                  src={team3}
                  width={268}
                  height={368}
                  alt='Lead Frontend Developer'
                />
                <Image
                  className={classes.teamDesktop}
                  src={team3}
                  width={328}
                  height={453}
                  alt='Lead Frontend Developer'
                />
              </div>
              <h3 className={classes.cardTitle}>{t('Dmytro')}</h3>
              <div className={classes.position}>Lead Frontend Developer</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
