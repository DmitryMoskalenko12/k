import './creative.scss';

const Creative = () => {
    return <section className='creative'>
        <h2 className='h2'>
        Let's build something <br/>
             <span className='span' style={{ '--i': 0 }} data-text="amazing ">amazing </span>
             <span className='span' style={{ '--i': 1 }} data-text="fantastic ">fantastic </span>
             <span className='span' style={{ '--i': 2 }} data-text="creative ">creative </span> together!
        </h2>
    </section>
}

export default Creative;