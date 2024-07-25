import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loadinig from '../../components/loading'
import ProductsItem from '../../components/products-cart/ProductsItem'
import './wish-list.scss'

const WishList = () => {
    const data = useSelector(state => state.wishlist.value)

    useEffect(() => { window.scroll(0, 0) }, [])

    return data ? (
        <section className='wish-list'>
            <div className="wish-list__container">
                <h2 className='like__title'>WishList</h2>
                <div className='wish-list__container-products'>
                    {data?.map(product => (
                        <ProductsItem key={product?.id} product={product} />
                    ))}
                </div>
            </div>
        </section>

    ) : <Loadinig />
}

export default memo(WishList)