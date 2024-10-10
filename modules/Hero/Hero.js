import classes from './hero.module.scss';
import Image from 'next/image';
import heroMobile from '@/image/heroMobile.webp';
import hero from '@/image/hero.webp';
import HeroSvg from '@/ui/svg/hero/HeroSvg';
import HeroDotsSvg from '@/ui/svg/hero/HeroDotsSvg';
import ButtonTriggerDesktop from '@/components/heroButtonTrigger/ButtonTriggerDesktop';
import ButtonTriggerMobile from '@/components/heroButtonTrigger/ButtonTriggerMobile';

const Hero = ({t}) => {
  return (
    <section className={classes.hero}>
      <div className='container'>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <h1 className={classes.title}>
              {t('lets')}
            </h1>
            <div className={classes.text}>
             {t('contact')}
            </div>
            <ButtonTriggerDesktop
              classes={classes}
              text={t('journey')}
            />
          </div>

          <div className={classes.imgButtonBlock}>
            <div className={classes.imgWrapper}>
              <Image
                className={classes.imgMobile}
                src={heroMobile}
                width={328}
                height={212}
                alt={t('people-with-a-cup')}
              />
              <Image
                className={classes.imgDesktop}
                src={hero}
                width={709}
                height={624}
                alt={t('people-with-a-cup')}
              />
            </div>
            <ButtonTriggerMobile classes={classes} text={t('journey')}/>
            <HeroSvg />
            <HeroDotsSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
