import React, { memo } from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className="footer__top">
                <li className='footer__top-item'>
                    <Link to={'/'} className='footer-logo'>3legant <span>.</span></Link>
                    <p className='logo-line'></p>
                    <p className='gift'>Gift & Decoration Store</p>
                </li>
                <li className="footer__lists">
                    <button className='footer__lists-item'>Home</button>
                    <button className='footer__lists-item'>Shop</button>
                    <button className='footer__lists-item'>Product</button>
                    <button className='footer__lists-item'>Blog</button>
                    <button className='footer__lists-item'>Contact Us</button>
                </li>
            </ul>
            <p className='footer-line'></p>
            <div className="footer__bottom">
                <div className="footer__bottom-left">
                    <p>Copyright © 2023 3legant. All rights reserved</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
                <div className="footer__bottom-right">
                    <FaInstagram fontSize={22} color='white' />
                    <FaFacebookF fontSize={19} color='white' />
                    <FaYoutube fontSize={24} color='white' />
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer)