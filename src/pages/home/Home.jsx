import React, { memo } from 'react'
import Hero from '../../components/hero'
import Sale from '../../components/sale'
import Newsletter from '../../components/newsletter'
import ProductsCart from '../../components/products-cart'
import './home.scss'

const Home = () => {

    return (
        <section className='home'>
            <Hero />
            <div className='home__products container__ns'>
                <ProductsCart />
                <ProductsCart />
                <ProductsCart />
                <ProductsCart />
                <ProductsCart />
                <ProductsCart />
                <ProductsCart />
                <ProductsCart />
                <ProductsCart />
                <ProductsCart />
                <ProductsCart />
            </div>
            <Sale />
            <div className='articales'></div>
            <Newsletter />
        </section>
    )
}

export default memo(Home)