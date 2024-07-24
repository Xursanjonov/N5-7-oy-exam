import React, { memo } from 'react'
import './button.scss'

const Button = ({ title, icon, onClick }) => {

    return (
        <button className='button__style' onClick={onClick ?? ''}> <span>{title}</span> {icon ?? ''} </button>
    )
}

export default memo(Button)