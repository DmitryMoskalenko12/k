'use client';
import { useRef, useEffect } from "react";
import './text.scss';

const Text = () => {
    const ref = useRef(null);
    
    useEffect(() => {
        ref.current.innerHTML = ref.current.innerText.split(/( )/).map((letter, i) => 
           letter === ' ' ? `<span style="width: 0.5em;">&nbsp;</span>` : `<span className="sp" style="transition-delay: ${i * 70}ms;  );">${letter} </span>`
        ).join('');
    },[]);

    return <section className="st">
    <h2 className="hr" ref={ref}>Lets build something amazing together!</h2>
    </section>
}

export default Text;