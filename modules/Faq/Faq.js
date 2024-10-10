'use client';
import classes from './faq.module.scss';
import FaqSvg from '@/ui/svg/Faq/FaqSvg';
import FaqLeftDots from '@/ui/svg/Faq/FaqLeftDots';
import FaqRightDots from '@/ui/svg/Faq/FaqRightDots';
import { useState, useRef, useEffect } from 'react';
import ButtonTriggerDesktop from '../../components/heroButtonTrigger/ButtonTriggerDesktop';
import { useTranslation } from 'react-i18next';
import CollapseItem from '../../components/collapseItem/CollapseItem';

const Faq = () => {
  const {t} = useTranslation('main');

  const collapseArr = (t) => [
    {
      title: t('how-long'),
      text: t('it-may-takes'),
      id: 1,
    },
    {
      title: t('what-impact'),
      text: t('complexity-quality'),
      id: 2,
    },
    {
      title: t('is-it-possible'),
      text: t('yes-it-is-possible'),
      id: 3,
    },
    {
      title: t('if-have'),
      text: t('yes-we-can'),
      id: 4,
    },
    {
      title: t('if-i-have-design'),
      text: t('when-the-client-has'),
      id: 5,
    },
    {
      title: t('is-it-possible-to-order'),
      text: t('provide-design-of-website'),
      id: 6,
    },
  ];

  const [collapseItems, setCollapseItems] = useState([]);
  const [activeTitle, setActiveTitle] = useState('');
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState('');
  const linkRef = useRef([]);

  useEffect(() => {
    setCollapseItems(collapseArr(t));
    //eslint-disable-next-line
  }, []);

  return (
    <section className={classes.faq}>
      <div className='container'>
        <div className={classes.titleBlock}>
          <FaqLeftDots />
          <FaqRightDots />
          <FaqSvg />
          <h2 className={classes.title}>{t('faq')}</h2>
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
          {t('unanswered')}
        </div>

        <div className={classes.collapse}>
          {collapseItems.map(({ title, text, id }) => {
            return (
              <CollapseItem
                key={id}
                setActiveTitle={setActiveTitle}
                toggle={toggle}
                height={height}
                linkRef={linkRef}
                setHeight={setHeight}
                setToggle={setToggle}
                activeTitle={activeTitle}
                title={title}
                text={text}
              />
            );
          })}
        </div>

        <div className={classes.contact}>
          <h3 className={classes.contactTitle}>
            {t('answer-to-your-question')}
          </h3>
          <div className={classes.contactText}>
            {t('uncertain-about')}
          </div>
          <ButtonTriggerDesktop classes={classes} text={t('contact-us')} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
