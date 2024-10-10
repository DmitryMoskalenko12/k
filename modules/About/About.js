import classes from './about.module.scss';
import AboutSvg from '@/ui/svg/AboutSvg/AboutSvg';
import aboutMobile from '@/image/aboutMobile.webp';
import aboutDesktop from '@/image/aboutDesktop.webp';
import Image from 'next/image';
import ButtonTriggerMobile from '@/components/heroButtonTrigger/ButtonTriggerMobile';
import ButtonTriggerDesktop from '@/components/heroButtonTrigger/ButtonTriggerDesktop';

const About = ({t}) => {
  return (
    <section className={classes.about}>
      <div className='container'>
        <div className={classes.titleBlock}>
          <div className={classes.titleUnder}>About</div>
          <h2 className={classes.title}>{t('about')}</h2>
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

        <div className={classes.wrapper}>
          <div className={classes.textContent}>
            <p className={classes.text1}>
              {t('we-are-team')}
            </p>
            <p className={classes.text2}>
           {t('mission')}
            </p>
            <p className={classes.text3}>
             {t('we-take')}
              <br />
              <span className={classes.bold}>
                {t('commitment')}
              </span>{' '}
            </p>
            <ButtonTriggerDesktop
              classes={classes}
              text={t('journey')}
            />
          </div>

          <div className={classes.buttonImageBlock}>
            <div className={classes.imgWrapper}>
              <Image
                className={classes.imageMobile}
                src={aboutMobile}
                width={328}
                height={223}
                alt={t('people-sitting')}
              />
              <Image
                className={classes.imageDesktop}
                src={aboutDesktop}
                width={553}
                height={419}
                alt={t('people-sitting')}
              />
            </div>
            <ButtonTriggerMobile classes={classes} text={t('journey')}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
