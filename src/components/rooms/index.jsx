import React, { memo } from 'react'
import rooms1 from '../../assets/images/img1.jpg'
import rooms2 from '../../assets/images/img2.png'
import rooms3 from '../../assets/images/img3.png'
import './rooms.scss'
import { GrFormNextLink } from 'react-icons/gr'

const Rooms = () => {
    return (
        <div className='rooms'>
            <div className="rooms1">
                <h5 className='rooms1__h5'>Living Room</h5>
                <button className='rooms1__btn'>Shop Now <GrFormNextLink fontSize={20} color='gray' /> </button>
            </div>
            <div className="room__2">
                <div className="rooms2">
                    <h5 className='rooms2__h5'>Living Room</h5>
                    <button className='rooms1__btn'>Shop Now <GrFormNextLink fontSize={20} color='gray' /> </button>
                </div>
                <div className="rooms3">
                    <h5 className='rooms3__h5'>Living Room</h5>
                    <button className='rooms1__btn'>Shop Now <GrFormNextLink fontSize={20} color='gray' /> </button>
                </div>
            </div>
        </div>
    )
}

export default memo(Rooms)