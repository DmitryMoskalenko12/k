'use client';
import classes from './practice.module.scss';

import { useState, useRef, useEffect } from "react";

const Practice = () => {
    const ref = useRef(null);

    useEffect(() => {
     
            for (let i = 0; i < 600; i++) {
                const div = document.createElement('div');
                div.classList.add('tr');
                ref.current.appendChild(div);
            }
        
        // Cleanup to avoid memory leaks
        return () => {
            if (ref.current) {
                ref.current.innerHTML = '';
            }
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            document.querySelectorAll('.tr').forEach((div) => {
                const x = (div.offsetLeft) - e.pageX;
                const y = (div.offsetTop) - e.pageY;
                const dist = Math.sqrt(x * x + y * y);
                const score = Math.exp(dist * -0.01);
                div.style.transform = `scale(${1 * score})`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <section className={classes.practice} ref={ref}></section>;
};

export default Practice;