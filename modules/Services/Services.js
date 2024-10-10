import classes from './services.module.scss';
import ServicesSvg from '@/ui/svg/Services/ServicesSvg';
import ServiceCardMobile from '@/components/ServiceCardMobile/ServiceCardMobile';
import ServiceCardDesktop from '@/components/ServiceCardDesktop/ServiceCardDesktop';
import ServicesLeftDots from '@/ui/svg/Services/ServiceLeftDots';
import ServiceRightDots from '@/ui/svg/Services/ServicesRightDots';

const Services = ({t}) => {
  const cardMobileData = [
    {
      title: t('landing'),
      li1: t('one-page'),
      li2: t('opt-in-form'),
      li3: t('call-to-action'),
      from: t('from'),
      price: '200 €',
      id: 1,
    },
    {
      title: t('busines'),
      li1: t('multiple-pages'),
      li2: t('custom-design'),
      li3: t('integrated-map'),
      from: t('from'),
      price: '300 €',
      id: 2,
    },
    {
      title: t('corporate-websites'),
      li1: t('multiple-pages'),
      li2: t('few-languages'),
      li3: t('blog-section'),
      from: t('from'),
      price: '600 €',
      id: 3,
    },
    {
      title: t('online-stores'),
      li1: t('admin-panel'),
      li2: t('payment-system'),
      li3: t('catalog'),
      from: t('from'),
      price: '1000 €',
      id: 4,
    },
    {
      title: t('crm-systems'),
      li1: t('user-cabinet'),
      li2: t('custom-funnel'),
      li3: t('user-roles'),
      from: t('from'),
      price: '1500 €',
      id: 5,
    },
    {
      title: t('other-types-of-websites'),
      li1: t('custom-design'),
      li2: t('custom-behavior'),
      li3: t('integrations'),
      from: t('from'),
      price: '2500 €',
      id: 6,
    },
  ];

  return (
    <section className={classes.services} id='services'>
      <div className='container'>
        <div className={classes.titleBlock}>
          <ServicesLeftDots />
          <ServiceRightDots />
          <ServicesSvg />
          <h2 className={classes.title}>{t('services-deliver')}</h2>
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
          {t('elevate')}
          <br className={classes.br} />
          {t('explore')}
        </div>

        <div className={classes.mobileWrapper}>
          {cardMobileData.map(({ title, li1, li2, li3, id, from, price }) => {
            return (
              <ServiceCardMobile
                key={id}
                title={title}
                li1={li1}
                li2={li2}
                li3={li3}
                from={from}
                price={price}
              />
            );
          })}
        </div>
        <div className={classes.desktopWrapper}>
          {cardMobileData.map(({ title, li1, li2, li3, id, from, price }) => {
            return (
              <ServiceCardDesktop
                key={id}
                title={title}
                li1={li1}
                li2={li2}
                li3={li3}
                from={from}
                price={price}
              />
            );
          })}
        </div>
        <a target='_blank' className={classes.button} href='https://koalendar.com/e/kyrsor-oleksandr-rekhletskyi'>
        {t('schedule')}
        </a>
      </div>
    </section>
  );
};

export default Services;
