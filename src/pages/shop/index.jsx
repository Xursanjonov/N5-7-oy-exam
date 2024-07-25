import React, { memo, useState } from 'react'
import { useGetProductsQuery } from '../../context/api/productApi'
import ProductsItem from '../../components/products-cart/ProductsItem'
import Loading from '../../components/loading'
import './shop.scss'

const Shop = () => {
    const [limit, setLimit] = useState(8)
    const [page, setPage] = useState(1)
    const { data, isFetching } = useGetProductsQuery({ limit: limit, page: 1 })

    return isFetching ? <Loading /> : (
        <section className='shop'>
            <div className='shop__container'>
                {
                    data?.map(el => (
                        <ProductsItem key={el?.id} product={el} />
                    ))
                }
                <button onClick={() => setLimit(p => p + 4)} className="btn-more">Show more</button>
            </div>
        </section>
    )
}

export default memo(Shop)