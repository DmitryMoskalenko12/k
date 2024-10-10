import classes from './serviceCardDesktop.module.scss';

const ServiceCardDesktop = ({ title, li1, li2, li3, from, price }) => {
  return (
    <article className={classes.cardDesktop}>
      <h3 className={classes.titleDesktop}>{title}</h3>
      <div className={classes.secondCardDesktop}>
        <ul className={classes.listDesktop}>
          <li className={classes.liDesktop}>{li1}</li>
          <li className={classes.liDesktop}>{li2}</li>
          <li className={classes.liDesktop}>{li3}</li>
        </ul>
        <div className={classes.priceBlock}>
          <div className={classes.price}>
            {from} {price}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCardDesktop;
