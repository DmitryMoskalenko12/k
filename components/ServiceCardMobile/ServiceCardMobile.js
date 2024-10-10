import classes from './serviceCardMobile.module.scss';

const ServiceCardMobile = ({ title, li1, li2, li3, from, price }) => {
  return (
    <article className={classes.cardMobile}>
      <h3 className={classes.cardTitle}>
        {title}
        <svg
          className={classes.hrCard}
          xmlns='http://www.w3.org/2000/svg'
          width='55'
          height='2'
          viewBox='0 0 55 2'
          fill='none'
        >
          <path
            d='M53.5 2C54.0523 2 54.5 1.55228 54.5 1C54.5 0.447715 54.0523 0 53.5 0V2ZM53.5 0L0.5 0V2L53.5 2V0Z'
            fill='#EC4155'
          />
        </svg>
      </h3>

      <div className={classes.cardMainContent}>
        <ul className={classes.cardList}>
          <li className={classes.cardLi}>{li1}</li>
          <li className={classes.cardLi}>{li2}</li>
          <li className={classes.cardLi}>{li3}</li>
        </ul>
        <div className={classes.from}>
          <div className={classes.price}>
            {from} <br /> {price}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCardMobile;
