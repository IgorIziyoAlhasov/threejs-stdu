import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>
                Think we can do things together? <br className='sm:block hidden' />
                Don't hestiate canacting me!
            </p>
            <Link to='/contact' className='btn'>
                Contact
            </Link>
        </section>
    )
}

export default CTA;