'use client'
import classes from './hero.module.scss';
import Image from 'next/image';
import heroMobile from '@/image/heroMobile.webp';
import hero from '@/image/hero.webp';
import HeroSvg from '@/ui/svg/hero/HeroSvg';
import HeroDotsSvg from '@/ui/svg/hero/HeroDotsSvg';
import ButtonTriggerDesktop from '@/components/heroButtonTrigger/ButtonTriggerDesktop';
import ButtonTriggerMobile from '@/components/heroButtonTrigger/ButtonTriggerMobile';
import { useEffect, useRef, useState } from 'react';
import { useCallback } from "react";
import  { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const {t} = useTranslation(['main']);
  const ref = useRef(null);
  const [x, setX] = useState();
  const [y, setY] = useState();

  const particlesInit = useCallback(async (engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadSlim(engine);
      
    }, []);

    const particlesLoaded = useCallback(async (container) => {
      console.log(container);
    }, []);

  const move = (e) => {
    setX(e.pageX - ref.current.offsetLeft);
    setY(e.pageY - ref.current.offsetTop);
    ref.current.style.setProperty('--x', x + 'px');
    ref.current.style.setProperty('--y', y + 'px')
  }

  return (
    <section ref={ref} onMouseMove={move} className={classes.hero}>
        <div className={classes.particles}>
      <Particles
            className={classes.part}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
      
            options={{
                fullScreen: { enable: false },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'bubble',
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#0072DE",
                    },
                    links: {
                        color: "#0072DE",
                        distance: 150,
                        enable: true,
                        opacity: 1,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      {/*   <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: false,
                        },
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            speed: 0.3,
                            size_min: 0.3,
                        },
                    },
                    line_linked: {
                        enable: false,
                    },
                    move: {
                        enable: true,
                        random: true,
                        speed: 0.3,
                        direction: "top",
                        out_mode: "out",
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 80,
                            duration: 2,
                            size: 0,
                            opacity: 0,
                        },
                        repulse: {
                            distance: 80,
                            duration: 0.4,
                            speed: 0.2,
                        },
                    },
                },
            }}
        /> */}
      </div>
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
