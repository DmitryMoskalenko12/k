import classes from './benefits.module.scss';
import BenefitsRightDots from '@/ui/svg/Benefits/BenefitsRightDots';
import BenefitsLeftDots from '@/ui/svg/Benefits/BenefitsLeftDots';
import BenefitsSvg from '@/ui/svg/Benefits/BenefitsSvg';
import benefitsDesktop from '@/image/benefitsDesktop.webp';
import benefitsMobile from '@/image/benefitsMobile.webp';
import Image from 'next/image';

const Benefits = ({t}) => {
  return (
    <section id='benefits' className={classes.benefits}>
      <div className='container'>
        <div className={classes.titleBlock}>
          <BenefitsLeftDots />
          <BenefitsRightDots />
          <BenefitsSvg />
          <h2 className={classes.title}>{t('why-choose')}</h2>
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
          <div className={classes.block1}>
            <article className={classes.card}>
              <div className={classes.cardSubWrapper}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='33'
                  viewBox='0 0 32 33'
                  fill='none'
                >
                  <path
                    d='M16 16.5001V9.83341L22.6666 3.16675H29.3333V9.83341L22.6666 16.5001H16Z'
                    fill='#EC4155'
                  />
                  <path
                    d='M16 23.1667V16.5001H9.33329L16 9.83341L9.33329 3.16675H2.66663V16.5001H9.33329L2.66663 23.1667V29.8334H9.33329L16 23.1667Z'
                    fill='#EC4155'
                  />
                  <path
                    d='M16 23.1667L22.6666 29.8334H29.3333V16.5001H22.6666L16 23.1667Z'
                    fill='#EC4155'
                  />
                </svg>
                <h3 className={classes.cardTitle}>{t('quality')}</h3>
              </div>
              <div className={classes.text}>
               {t('we-deliver')}
              </div>
            </article>
            <article className={classes.card}>
              <div className={classes.cardSubWrapper}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='33'
                  viewBox='0 0 32 33'
                  fill='none'
                >
                  <path
                    d='M29.3334 8.50008V16.5001L16.0001 3.16675H24.0001L29.3334 8.50008Z'
                    fill='#0072DE'
                  />
                  <path
                    d='M16.0001 29.8334L29.3334 16.5001V24.5001L24.0001 29.8334H16.0001Z'
                    fill='#0072DE'
                  />
                  <path
                    d='M2.66675 16.5001L16.0001 29.8334H8.00008L2.66675 24.5001V16.5001Z'
                    fill='#0072DE'
                  />
                  <path
                    d='M2.66675 16.5001V8.50008L8.00008 3.16675H16.0001L2.66675 16.5001Z'
                    fill='#0072DE'
                  />
                  <path
                    d='M9.33341 16.5001L16.0001 9.83341L22.6667 16.5001L16.0001 23.1667L9.33341 16.5001Z'
                    fill='#0072DE'
                  />
                </svg>
                <h3 className={classes.cardTitle}>{t('cost')}</h3>
              </div>
              <div className={classes.text}>
               {t('we-focus')}
              </div>
            </article>
            <article className={classes.card}>
              <div className={classes.cardSubWrapper}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='33'
                  viewBox='0 0 32 33'
                  fill='none'
                >
                  <path
                    d='M21.3333 7.16667L18.6667 11.8333H13.3333L10.6667 7.16667L13.3333 2.5H18.6667L21.3333 7.16667Z'
                    fill='#0072DE'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16 16.5L13.3333 11.8333H8L5.33333 16.5L8 21.1667H2.66667L0 25.8333L2.66667 30.5H8L10.6667 25.8333L13.3333 30.5H18.6667L21.3333 25.8333L24 30.5H29.3333L32 25.8333L29.3333 21.1667H24L26.6667 16.5L24 11.8333H18.6667L16 16.5ZM18.6667 21.1667L16 16.5L13.3333 21.1667H8L10.6667 25.8333L13.3333 21.1667H18.6667ZM18.6667 21.1667H24L21.3333 25.8333L18.6667 21.1667Z'
                    fill='#0072DE'
                  />
                </svg>
                <h3 className={classes.cardTitle}>{t('trust')}</h3>
              </div>
              <div className={classes.text}>
                {t('we-believe')}
              </div>
            </article>
            <article className={classes.card}>
              <div className={classes.cardSubWrapper}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='33'
                  viewBox='0 0 32 33'
                  fill='none'
                >
                  <path
                    d='M20.6667 2.5V11.8333L11.3333 2.5H20.6667Z'
                    fill='#EC4155'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M30 21.1667V11.8333H20.6667H11.3333V21.1667L2 11.8333L11.3333 2.5H2V11.8333V21.1667H11.3333V30.5H20.6667H30V21.1667ZM30 21.1667L20.6667 30.5L11.3333 21.1667H20.6667V11.8333L30 21.1667Z'
                    fill='#EC4155'
                  />
                </svg>
                <h3 className={classes.cardTitle}>{t('schedule-title')}</h3>
              </div>
              <div className={classes.text}>
               {t('we-understand')}
              </div>
            </article>
          </div>

          <div className={classes.imgWrapper}>
            <Image
              className={classes.benefitsDesktop}
              src={benefitsDesktop}
              width={540}
              height={415}
              alt={t('people-looking')}
            />
            <Image
              className={classes.benefitsMobile}
              src={benefitsMobile}
              width={328}
              height={235}
              alt={t('people-looking')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
