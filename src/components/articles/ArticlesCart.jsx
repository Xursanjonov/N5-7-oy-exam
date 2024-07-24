import React, { memo } from 'react'
import './articles-cart.scss'
import { GrFormNextLink } from 'react-icons/gr'

const ArticlesCart = ({ image, title, btnLink }) => {
    // const suctomers

    return (
        <div className='articles-cart'>
            <img className='articles-cart-img' src={image} alt="" />
            <p className='articles-cart-p'>{title}</p>
            <button onClick={() => navigate(btnLink)} className='articles-cart-btn'>Rread More <GrFormNextLink fontSize={24} color='gray' /></button>
        </div>
    )
}

export default memo(ArticlesCart)