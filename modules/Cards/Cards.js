'use client';
import './cards.scss';
import { useRef, useEffect, useState } from 'react';

const Cards = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [x2, setX2] = useState();
    const [y2, setY2] = useState();
    
    const move = (e) => {
        setX(e.pageX - ref.current.offsetLeft);
        setY(e.pageY - ref.current.offsetTop);
        ref.current.style.setProperty('--x', x + 'px');
        ref.current.style.setProperty('--y', y + 'px');
      }

      const move2 = (e) => {
        setX2(e.pageX - ref2.current.offsetLeft);
        setY2(e.pageY - ref2.current.offsetTop);
        ref2.current.style.setProperty('--x', x2 + 'px');
        ref2.current.style.setProperty('--y', y2 + 'px')
      }

   return <div className="boxContainer">
              <div ref={ref} onMouseMove={move} className='box'></div>
              <div ref={ref2} onMouseMove={move2} className='box'></div>
          </div>
}

export default Cards;