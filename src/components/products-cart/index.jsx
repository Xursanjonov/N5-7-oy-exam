import React, { Fragment, memo, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import ProductsItem from './ProductsItem'
import Button from '../button'
import './products-wrapper.scss'

const ProductsWrapper = ({ products, categories }) => {
    const [categorys, setCategorys] = useState(categories?.map(category => category?.name))

    return (
        <Fragment>
            <div className="home__products-title">
                <h3 className='home__products-title-h3'>New Arrivals</h3>
                <Button title={'More Products'} icon={<GrFormNextLink fontSize={20} color='#0009' />} />
            </div>
            <ul className="home__categories">
                {
                    categories?.map(category => (
                        <li disabled={categorys === category?.name} onClick={() => setCategorys(category?.name)} key={category?.id} className='home__categories-item'>
                            <div className="item-img">
                                <img className='item-img-image' src={category?.image} alt="" />
                            </div>
                            <p className='item-name'>{category?.name}</p>
                        </li>
                    ))
                }
            </ul>
            <div className='home__products container__ns'>
                {
                    products?.map(product => (
                        <ProductsItem key={product.id} product={product} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default memo(ProductsWrapper)