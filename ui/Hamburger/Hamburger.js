'use client';
import cn from 'classnames';
import classes from './hamburger.module.scss';

const Hamburger = ({ active, setActive }) => {
  return (
    <div
      className={cn(classes.hamburger, { [classes.activeHamburger]: active })}
      onClick={() => setActive((prev) => !prev)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Hamburger;
