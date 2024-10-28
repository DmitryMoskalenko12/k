'use client';

import './jungle.scss';
import { useState, useRef, useEffect } from "react";

const Jungle = () => {
    const ref = useRef(null);
    const refCursor = useRef(null);

    useEffect(() => {
     
            for (let i = 0; i < 8000; i++) {
                const span = document.createElement('span');
                ref.current.appendChild(span);
            }

    }, []);

  const move = (e) => {
    refCursor.current.style.left = e.clientX + 'px';
    refCursor.current.style.top = e.clientY + 'px';
  }

    return <section onMouseMove={move} className='jungle'>
    <div ref={ref} id="container"></div>
    <div ref={refCursor} id="cursor"></div>
    </section>
}

export default Jungle;