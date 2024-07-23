import React, { memo } from 'react'
import Hero from '../../components/hero'
import Sale from '../../components/sale'
import './home.scss'

const Home = () => {

    return (
        <section className='home'>
            <Hero />
            <Sale />
        </section>
    )
}

export default memo(Home)