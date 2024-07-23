import React, { memo, useState } from 'react';
import images from '../../assets/images/img1.jpg'
import { FaRegHeart } from 'react-icons/fa6';
import './ProductsCart.scss';

const ProductsCart = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`products-cart ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='product-tag'>
                <span className="new">NEW</span>
                <span className="discount">-50%</span>
            </div>
            <div className="wishlist-button">
                <FaRegHeart color='black' fontSize={20} />
            </div>
            <figure className="product-image">
                <img src={images} alt="Loveseat Sofa" />
                <button className="add-to-cart-button">Add to cart</button>
            </figure>
            <div className="product-info">
                <div className="product-rating">★★★★★</div>
                <div className="product-name">Loveseat Sofa</div>
                <div className="product-price">
                    <span className="current-price">$199.00</span>
                    <span className="original-price">$400.00</span>
                </div>
            </div>
        </div>
    );
};

export default memo(ProductsCart);
